import { site } from '../../data/common'

export default function Logo({ className }) {
  return <img className={className} src={site.logo} alt={site.name} />
}
