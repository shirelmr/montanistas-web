#!/usr/bin/env python3
"""Prepare a photo for the website.

Turns a phone photo (HEIC, JPG or PNG) into a small WebP that loads fast:
rotated the right way up, resized, and with all metadata removed (phone
photos carry the GPS location where they were taken).

Usage:
    python3 scripts/optimize_images.py INPUT OUTPUT.webp [--max-size 1600] [--thumb]

    --max-size  longest side in pixels (default 1600; use 2400 for the hero)
    --thumb     also write a small preview to thumbs/OUTPUT.webp next to it,
                used by the gallery thumbnail strips

Example, adding a photo to the trips gallery:
    python3 scripts/optimize_images.py ~/Desktop/media/IMG_1234.HEIC \\
        src/assets/images/galleries/trips/21-summit-sunrise.webp --thumb

Needs Pillow (pip install Pillow). HEIC files are decoded with macOS's
built-in `sips` tool, so they must be converted on a Mac.
"""

import argparse
import subprocess
import sys
import tempfile
from pathlib import Path

from PIL import Image, ImageOps

QUALITY = 78
THUMB_SIZE = 320


def open_image(path: Path) -> Image.Image:
    if path.suffix.lower() in {'.heic', '.heif'}:
        with tempfile.TemporaryDirectory() as tmp:
            jpeg = Path(tmp) / 'converted.jpg'
            try:
                subprocess.run(
                    ['sips', '-s', 'format', 'jpeg', str(path), '--out', str(jpeg)],
                    check=True,
                    capture_output=True,
                )
            except FileNotFoundError:
                sys.exit('HEIC photos need macOS (sips). Convert them to JPG first.')
            image = Image.open(jpeg)
            image.load()
            return image
    return Image.open(path)


def save_webp(image: Image.Image, out: Path, max_size: int) -> None:
    resized = image.copy()
    resized.thumbnail((max_size, max_size), Image.LANCZOS)
    out.parent.mkdir(parents=True, exist_ok=True)
    # Saving without `exif=` drops all metadata, including location.
    resized.save(out, 'WEBP', quality=QUALITY, method=6)
    print(f'{out}  {resized.width}x{resized.height}  {out.stat().st_size // 1024} KB')


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('input', type=Path)
    parser.add_argument('output', type=Path)
    parser.add_argument('--max-size', type=int, default=1600)
    parser.add_argument('--thumb', action='store_true')
    args = parser.parse_args()

    if args.output.suffix.lower() != '.webp':
        sys.exit('OUTPUT must end in .webp')

    image = ImageOps.exif_transpose(open_image(args.input))
    image = image.convert('RGBA' if image.mode in ('RGBA', 'LA', 'P') else 'RGB')

    save_webp(image, args.output, args.max_size)
    if args.thumb:
        save_webp(image, args.output.parent / 'thumbs' / args.output.name, THUMB_SIZE)


if __name__ == '__main__':
    main()
