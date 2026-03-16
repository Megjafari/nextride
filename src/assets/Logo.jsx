import logoSvg from './logo.svg'

export default function Logo({ className = '' }) {
  return (
    <img
      src={logoSvg}
      alt="NextRide"
      className={className}
    />
  )
}