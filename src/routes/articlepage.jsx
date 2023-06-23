
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { ArticleDisplayDate, ArticleFavorited } from '../components/article/article';
import style from '../components/article/article.module.css'

export function ArticlePage() {
 const slug = useLocation().pathname.replace("/article/", "")
 const [isLoading, setIsLoading] = useState(true);
 const [data, setData] = useState();

 // temporary solution from: https://dev.to/gdsckiitdev/dynamic-pages-using-react-router-2pm
 useEffect(() => {
   fetch(`https://api.realworld.io/api/articles/${slug}`, {})
     .then((res) => res.json())
     .then((response) => {
       setData(response);
       setIsLoading(false);
     })
     .catch((error) => console.log(error));
 }, [slug]);

 return (
  <>
  {!isLoading && (
  <article>
  <div className={style.articleTitle}>
   <div className={style.articleUserDetails}>
    <img src={data.article.author.image} alt="" />
    <div>
     <a className={style.articleAuthor} href="#">{data.article.author.username}</a>
     <ArticleDisplayDate {...data.article}/>
    </div>
   </div>
   <div>
    <ArticleFavorited {...data.article}/>
   </div>
  </div>
  <div className={style.articleContent}>
   <h1>{data.article.title}</h1>
   <p>{data.article.body}</p> 
  </div>
  <div className={style.articleFooter}>
    <Link to="/">Return</Link>
   <span className={style.articleTags}>
    {data.article.tagList.map((tag) => {
     return (
       <a href="#" key={tag.index+tag}>{tag}</a>
       )
   })}
   </span>
  </div>
 </article>
  )}</>
 )
}