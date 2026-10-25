import { site } from '../../data/content'

export default function Logo({ className }) {
  return <img className={className} src={site.logo} alt={site.name} />
}
