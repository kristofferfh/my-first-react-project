import { ArticleList, ArticleListStats } from '../components/article/article'
import { ArticlePagination } from '../components/article/articlepagination'
import articleData from '../data/article.json'

export default function Blog() {
 return (
  <>
   <main>
    {/* <ArticleListStats {...articleData} /> */}
    <ArticlePagination {...articleData} />
    {/* <ArticleList {...articleData} /> */}
   </main>
  </>
 )
}