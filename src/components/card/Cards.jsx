import './cards.css'
import { ArticleContext } from '../../ArticleContext'
import Card from './Card'
import { useState, useContext } from 'react'

const Cards = ({ articles, data, }) => {

    const [context] = useContext(ArticleContext)

    return (
        <div className={context ? "column-container" :"cards-container"}>
            {articles.map((article, index) => (
                <Card
                    key={index}
                    article={article}
                    title={article.title}
                    author={article.author}
                    description={article.description}
                    publishedAt={article.publishedAt}
                    url={article.url}
                    urlToImage={article.urlToImage}
                />
            ))}
        </div>
    )
}


export default Cards