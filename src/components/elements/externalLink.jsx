/**
 * @param {{
 *  href: URL
 *  children: React.JSX.Element}} props
 * @returns
 */
export default function ExternalLink(props) {
 return (
  <a 
  target="_blank"
  href={props.href}
  referrerPolicy="none"
  rel="noreferrer"
  >
   {props.name}
  </a>
 )
}