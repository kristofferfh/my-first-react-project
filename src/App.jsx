// import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import { Article, ArticleList, ArticleListStats } from './components/article/article'
import articleData from './data/article.json'
import './styles/App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleListStats {...articleData} />
        <ArticleList {...articleData} />
      </main>
    </>
  )
}