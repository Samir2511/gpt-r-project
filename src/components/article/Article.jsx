import React from 'react'
import './article.css';



const Article = ({title, footer, date, image}) => {
  return (
    <div className="gpt3__blog-container__article">
      <div className="gpt3__blog-container__image">
          <img src={image} alt="img" />
      </div>
      <div className="gpt3__blog-container__text">
        <div>
          <p>{date}</p>
          <h4>{title}</h4>
        </div>
          <a href="#">{footer}</a>
      </div>
      </div>
  )
}

export default Article