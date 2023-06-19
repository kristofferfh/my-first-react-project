/**
 * 
 * @param {*} props.href Link dest
 * @param {*} props.name Link name
 * @returns url link
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