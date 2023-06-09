export function Article(props) {
 const {slug, title, description, body, tagList, createdAt, updatedAt, favorited, favoritesCount, author} = props

 return (
  <article>
   <div>
    <div>
     <img src={author.image} alt="" />
     {author.username}
     {createdAt}
    </div>
    <div>
     {favorited}
     {favoritesCount}
    </div>
   </div>
   <div>
    <h1>{title}</h1>
    <p>{description}</p> 
   </div>
   <div>
   {slug}
   {/* tag list */}
   </div>
  </article>
 )
}

export function ArticleList(props) {
 const { articles } = props
 return (
  <div id="article-container">
   {articles.map((article, index) => (
    <Article {...article} key={index} />
   ))}
  </div>
 )
}