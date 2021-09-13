import React from 'react'
import './Blog.scss'
import Header from '../../components/Header'
import PageTitle from '../../components/PageTitle/PageTitle'
import PopularArticle from '../../sections/PopularArticle/PopularArticle'
import AllArticles from '../../sections/AllArticles/AllArticles'

const Blog = () => {
  return (
    <main>
      <Header />
      <PageTitle title="Blog Afrianska" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
      <PopularArticle />
      <AllArticles />
    </main>
  )
}

export default Blog
