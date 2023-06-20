import { ArticleList, ArticleListStats } from '../components/article/article'
import { ArticlePagination } from '../components/article/articlepagination'
import articleData from '../data/article.json'

export default function Blog() {
 return (
  <>
   <main>
    {/* <ArticlePagination {...articleData} /> */}
    <ArticleListStats {...articleData} />
    {/* <ArticleList {...articleData} /> */}
   </main>
  </>
 )
}