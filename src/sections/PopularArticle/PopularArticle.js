import React from 'react'
import './PopularArticle.scss'
import { FaSearch } from 'react-icons/fa'
import { IoShareSocial } from 'react-icons/io5'
import { BsBookmarksFill } from 'react-icons/bs'


const Articles = ({ title, description, image, name, date, small }) => {
  let className = 'main-article'
  if (small) {
    className += ' small'
  }

  return (
    <div className={className}>

      <div className="texts">
        <h1 className="article-title">{title}</h1>
        <p className="article-description">{description}</p>

        <div className="article-footer">
          <div className="author-date">
            <p className="author">{name}</p>
            <p className="date">{date}</p>
          </div>
          <BsBookmarksFill color="#356EAD" size={24} />
          <IoShareSocial color="#356EAD" size={24} />
        </div>

      </div>

      <div className="article-image">
        <img src={image} alt="" />
      </div>

    </div>
  )
}

const PopularArticle = () => {
  return (
    <div className="popular-article">

      <div className="search">
        <label className="input-search">
          <FaSearch size={16} color="#1f3f6884" />
          <input type="text" placeholder="Search Article" />
        </label>
      </div>

      <h1>POPULAR</h1>

      <Articles
        title="Feugiat sodales at nullam tellus."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi posuere nibh tempor fringilla porta pellentesque ipsum."
        image="/img/first.JPG"
        name="Samatha Leuthex"
        date="May 5, 3 min read"
      />

      <div className="bottom-articles">
        <Articles
          title="Porta proin tellus sed pulvinar odio eu pulvinar."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          image="/img/second.png"
          name="Samatha Leuthex"
          date="May 5, 3 min read"
          small
        />

        <Articles
          title="Non quam tortor, proin eu egestas scelerisque purus."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          image="/img/third.png"
          name="Samatha Leuthex"
          date="May 5, 3 min read"
          small
        />

        <Articles
          title="Amet amet sed pharetra risus sit eget interdum."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          image="/img/fourth.png"
          name="Samatha Leuthex"
          date="May 5, 3 min read"
          small
        />
      </div>
      <div className="divider"></div>

    </div>
  )
}

export default PopularArticle
