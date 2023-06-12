import './article.css'

export function Article(props) {
 const {slug, title, description, body, tagList, createdAt, updatedAt, favorited, favoritesCount, author} = props

 return (
  <article>
   <div className='article-title'>
    <div className='article-user-details'>
     <img src={author.image} alt="" />
     <div>
      <a className='article-author' href="#">{author.username}</a>
      <div className='article-date-posted'>
        posted on:
        <p>{createdAt} </p>
      </div>
     </div>
    </div>
    <div>
     <ArticleFavorited {...props}/>
    </div>
   </div>
   <div className='article-content'>
    <h1>{title}</h1>
    <p>{description}</p> 
   </div>
   <div className='article-footer'>
    <a href={slug}>Read more</a>
    <span className='article-tags'>
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
  <div id="article-container">
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
        <div id="article-stats">

        </div>
    )
}


// favorite function on 2dolist, for now, defaultChecked
function ArticleFavorited(props) {
    return (     
        <label>
            <input type="checkbox" defaultChecked={props.favorited} />
            <i className="article-favorited-false">🖤</i>
            <i className="article-favorited-true">❤️</i>
            <span>{props.favoritesCount}</span>
        </label>
    )
}