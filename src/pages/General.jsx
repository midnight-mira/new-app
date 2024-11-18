import React, { useState, useEffect } from "react";
import Cards from "../components/card/Cards";
import NewsDescCard from "../components/card/NewsDescCard";
import { useContext, useRef, useCallback } from "react";
import {NewsDescCardModal} from '../components/Modal'
import { ArticleContext } from '../ArticleContext'
const API_KEY = "";
import './general.css'

const General = ({ category }) => {
    const [data, setData] = useState([]);
    const [selectedArticle] = useContext(ArticleContext)
    const selectedArticleRef = useRef(null);
    const [istoggle, setIstoggle] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth > 768);

    // Fetch data based on the category
    const fetchCategory = async (category) => {
        const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching the news:', error);
        }
    };

    // Fetch default data when category is null or undefined
    const fetchDefault = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching the news:', error);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    // useEffect to trigger data fetch on category change
    useEffect(() => {
        const selectedCategory = category || 'default'; // Default to 'general' if no category
        const fetchData = async () => {
            const newsData = selectedCategory === 'default'
                ? await fetchDefault()  // Fetch default data if category is 'general'
                : await fetchCategory(selectedCategory); // Fetch category-specific data

            if (newsData) {
                setData(newsData); // Set data state when fetched
            }
        };

        fetchData();
    }, [category]);

    // Add category as dependency to rerun on category change

    useEffect(() => {
        if (selectedArticle) {
            selectedArticleRef.current = selectedArticle;
            console.log(selectedArticleRef.current);
            setIstoggle(true)
        }
    }, [selectedArticle]);


    function handleOnclick() {
        console.log(object)
        setIstoggle(!istoggle)
    }

    return (

        <div>
            {istoggle ? (
                windowWidth ? (
                <div className="news-card-container">
                    <div className="news-container sticky">
                        <NewsDescCard article={selectedArticle} />
                    </div>

                    <div className="cards-news">
                        {data.articles ? <Cards articles={data.articles} onClick={handleOnclick} /> : <p>Loading...</p>}
                    </div>
                </div> )
                : (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-button" onClick={closeModal}>×</button>
                            <NewsDescCardModal article={selectedArticle} />
                        </div>

                    </div>
                ))
                :
                <div className="cards-container">
                    {data.articles ? <Cards articles={data.articles} onClick={handleOnclick} /> : <p>Loading...</p>}
                </div>
            }
        </div>


    );
};

export default General;

/*
GET https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=API_KEY
*/
