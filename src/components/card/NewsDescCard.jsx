import "./news-card.css"

const NewsDescCard = ({ article,}) => {
    return (
        <div>
                <div className="news-container">
                    <div className='news-desc-card'>
                        <div className='header'>
                            {article.title}
                        </div>
                        <div className='image'>
                            <img src={article.urlToImage} alt={article.title} />
                        </div>
                        <div className='article-info'>
                            <span>{article.author}</span>
                            <span>{article.source.name}</span>
                            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                        </div>
                        <div className='content'>
                            {article.content}
                        </div>
                        <div className='footer'>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more at {article.source.name}</a>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default NewsDescCard
