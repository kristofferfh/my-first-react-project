// import { useState } from 'react'
import Navbar from './components/navbar'
import { Article, ArticleList } from './components/article'
import articleData from './data/article.json'
import './styles/App.css'



export default function App() {
  // console.log(articleData)
  return (
    <>
      <Navbar />
      <main>
        <ArticleList {...articleData} />
      </main>
    </>
  )
}