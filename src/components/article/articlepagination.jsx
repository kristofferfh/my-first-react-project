import { useState } from 'react'
import { useOutlet, Link, useNavigation} from 'react-router-dom'
import { Article } from './article'
import style from './article.module.css'


// test example from https://hygraph.com/blog/react-pagination
// used for working demo and understanding base principles

function Paginate({postsPerPage,totalPosts,paginate,previousPage,nextPage}) {
 const pageNumbers = []
 for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
  pageNumbers.push(i);
 }

 return (
  <div>
   <button onClick={previousPage}>Prev</button>
   {pageNumbers.map((number) => (
    <button
     key={number}
     onClick={()=>paginate(number)}
    >
     {number}
    </button>
   ))}
   <button onClick={nextPage}>Next</button>
  </div>
 )
}

export function ArticlePagination(props) {
 const { articles } = props
 const [currentPage, setCurrentPage] = useState(1);
 const [postsPerPage] = useState(3);

 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);

 const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
 }

 const previousPage = () => {
  if (currentPage !== 1) {
     setCurrentPage(currentPage - 1);
  }
}

const nextPage = () => {
  if (currentPage !== Math.ceil(articles.length / postsPerPage)) {
     setCurrentPage(currentPage + 1);
  }
}
 
 return (
 <div>
  <div id={style.articleContainer}>
   {currentPosts.map((article) => (
    <Article {...article} key={article.slug} />
   ))}
  </div>
  <div id={style.articlePagination}>
   <Paginate
    postsPerPage={postsPerPage}
    totalPosts={articles.length}
    paginate={paginate}
    previousPage={previousPage}
    nextPage={nextPage}
   />
  </div>
 </div>
 )
}



// todo! https://stackoverflow.com/questions/70683967/how-to-use-pagination-with-react-router-v6