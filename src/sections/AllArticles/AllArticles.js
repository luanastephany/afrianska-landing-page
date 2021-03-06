import React from 'react'
import './AllArticles.scss'
import InvisibleBtn from '../../components/InvisibleBtn'
import { IoShareSocial } from 'react-icons/io5'
import { BsBookmarksFill } from 'react-icons/bs'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

const Posts = ({ image, title, description, name, date }) => {
  return (
    <div className="posts">
      <img src={image} alt="" />

      <div className="texts">
        <p className="title">{title}</p>
        <p className="description">{description}</p>

        <div className="footer-article">
          <div className="author-date">
            <p className="author">{name}</p>
            <p className="date">{date}</p>
          </div>
          <BsBookmarksFill color="#356EAD" size={20} />
          <IoShareSocial color="#356EAD" size={20} />
        </div>
      </div>

    </div>
  )
}


const AllArticles = () => {
  return (
    <div className="all-articles">
      <h1>All Article</h1>

      <Posts
        image="/img/post1.png"
        title="Massa eu in laoreet enim augue vulputate nunc."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec."
        name="Samatha Leuthex"
        date="May 5, 3 min read"
      />

      <Posts
        image="/img/post2.png"
        title="Feugiat a euismod arcu feugiat posuere morbi."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec."
        name="Samatha Leuthex"
        date="May 5, 3 min read"
      />

      <Posts
        image="/img/post3.png"
        title="Sociis purus pellentesque faucibus vitae et felis."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec."
        name="Samatha Leuthex"
        date="May 5, 3 min read"
      />

      <Posts
        image="/img/post4.png"
        title="Cursus feugiat mi pellentesque mauris sed eu."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec."
        name="Samatha Leuthex"
        date="May 5, 3 min read"
      />

      <Posts
        image="/img/post5.png"
        title="A morbi arcu curabitur etiam fringilla augue."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec."
        name="Samatha Leuthex"
        date="May 5, 3 min read"
      />
      <div className="bottom-control">
        <InvisibleBtn>
          <FaArrowLeft />
          <span>New Post</span>
        </InvisibleBtn>

        <InvisibleBtn>
          <span>Old Post</span>
          <FaArrowRight />
        </InvisibleBtn>
      </div>



    </div>
  )
}

export default AllArticles
