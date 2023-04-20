import React from 'react'
import './blog.css';
import Article from '../../components/article/Article';
import blog1 from '../../assets/blog01.png';
import blog2 from '../../assets/blog02.png';
import blog3 from '../../assets/blog03.png';
import blog4 from '../../assets/blog04.png';
import blog5 from '../../assets/blog05.png';


const Blog = () => {

  const articleData = [
    {
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      footer: "Read Full Article",
      image: blog2
    },
    {
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      footer: "Read Full Article",
      image: blog3
    },
    {
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      footer: "Read Full Article",
      image: blog4
    },
    {
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      footer: "Read Full Article",
      image: blog5
    }
  ]
  const articleADATA = {
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      footer: "Read Full Article",
      image: blog1
  }
  

  return (
    <div className='gpt3__blog section__padding'>
      <div className="gpt3__blog-heading">
      <h1 className='gradient__text'>
        A lot is happening, <br/>
        We are blogging about it.
      </h1>
      </div>
      <div className="gpt3__blog-container">
      <div className="gpt3__blog-container__content-groupA"> 
        <Article
            className="contentA"
            key="1"
            title={articleADATA.title}
            footer={articleADATA.footer}
            date={articleADATA.date}
            image={articleADATA.image}
        />
      </div>
      <div className="gpt3__blog-container__content-groupB">
        {articleData.map((data, index) => {
          return <Article
            key={index}
            title={data.title}
            footer={data.footer}
            date={data.date}
            image={data.image}
          />
        })}
      </div>
      </div>
    </div>
  )
}

export default Blog