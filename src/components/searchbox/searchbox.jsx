import { useState } from "react"
import style from './searchbox.module.css'

export default function SearchBox() {
 const [text, setText] = useState("")

 function updateText(e) {
 setText(e.target.value)
 }

 return (
  <div>
   <input type="text" name="" id="" onChange={updateText} value={text}/>
   <div id="searchResult" className={text.length === 0 ? "hidden" : style.searchResult}>
    <p>{text}</p>
   </div>
  </div>
 )
}