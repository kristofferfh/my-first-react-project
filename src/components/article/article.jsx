import style from './article.module.css'
import { useState } from 'react'

export function Article(props) {
 const {slug, title, description, body, tagList, createdAt, updatedAt, favorited, favoritesCount, author} = props

 return (
  <article>
   <div className={style.articleTitle}>
    <div className={style.articleUserDetails}>
     <img src={author.image} alt="" />
     <div>
      <a className={style.articleAuthor} href="#">{author.username}</a>
      <div className={style.articleDatePosted}>
        posted on:
        <p>{createdAt} </p>
      </div>
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
    <a href={slug}>Read more</a>
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
 let articleTags = []
 for (const article of props.articles) {
  for (const tag of article.tagList) {
   articleTags.push(tag)    
  }
 }
 // console.log(articleTags)

 return (
  <div id={style.articleStats}>

  </div>
 )
}


// favorite function on 2dolist, for now, defaultChecked
function ArticleFavorited(props) {
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