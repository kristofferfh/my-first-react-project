import { useState } from "react"
import style from './searchbox.module.css'

export default function SearchBox() {
 const [text, setText] = useState("")

 function updateText(e) {
 setText(e.target.value)
 }

 return (
  <div id={style.navSearchBox}>
   <input type="text" name="navSearchResult" id={style.navSearchInput} onChange={updateText} value={text}/>
   <div id={style.navSearchResult} className={text.length === 0 ? "hidden" : style.searchResult}>
    <p>{text}</p>
   </div>
  </div>
 )
}