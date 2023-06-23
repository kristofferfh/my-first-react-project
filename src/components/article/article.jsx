import style from './article.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Article(props) {
 const {slug, title, description, body, tagList, createdAt, updatedAt, favorited, favoritesCount, author} = props

 return (
  <article>
   <div className={style.articleTitle}>
    <div className={style.articleUserDetails}>
     <img src={author.image} alt="" />
     <div>
      <a className={style.articleAuthor} href="#">{author.username}</a>
      <ArticleDisplayDate {...props}/>
     </div>
    </div>
    <div>
     <ArticleFavorited {...props}/>
    </div>
   </div>
   <div className={style.articleContent}>
    <h1>{title}</h1>
    <p>{description}</p> 
   </div>
   <div className={style.articleFooter}>
    <Link to={`article/${slug}`}>Read more</Link>
    <span className={style.articleTags}>
     {tagList.map((tag) => {
      return (
        <a href="#" key={tag.index+tag}>{tag}</a>
        )
    })}
    </span>
   </div>
  </article>
 )
}

export function ArticleList(props) {
 const { articles } = props
 return (
  <div id={style.articleContainer}>
   {articles.map((article) => (
    <Article {...article} key={article.slug} />
   ))}
  </div>
 )
}

export function ArticleListStats(props) {
 // Generate a list over all article tags
 // (example) rerum: 1
 let articleTagsObj = {}
 for (const article of props.articles) {
  for (const tag of article.tagList) {
    articleTagsObj[tag] = articleTagsObj[tag] + 1 || 1
  }
 }

 // todo add eventlistener and sort articles by tags
 return (
  <div id={style.articleStats}>
    {Object.entries(articleTagsObj).map((key) => (
      <p key={key}><span>{key[1]}x</span>{key[0]}</p>
    ))}
  </div>
 )
}

export function ArticleFavorited(props) {
 const [fav, setFavorited] = useState(false);
 let {favorited,favoritesCount} = props

 if (fav) favoritesCount += 1;

 function handleChange(e) {
  setFavorited(e.target.checked)
 }

 return (     
  <label>
   <input type="checkbox" 
    defaultChecked={favorited}
    onChange={handleChange} 
   />
   <i className={style.articleFavoritedFalse}>🖤</i>
   <i className={style.articleFavoritedTrue}>❤️</i>
   <span>{favoritesCount}</span>
  </label>
 )
}

export function ArticleDisplayDate(props) {
  const created = new Date(props.createdAt)
  const edited = new Date(props.updatedAt)
  const isEdited = props.createdAt !== props.updatedAt

  return (
    <div className={style.articleDateDetails}>
      <p>{created.toUTCString()}{isEdited?" (Edited)":""}</p>
      {isEdited?(<span>
        <p>Edited by {props.author.username} on:</p>
        <p>{edited.toUTCString()}</p>  
      </span>):("")}
    </div>
  )
}