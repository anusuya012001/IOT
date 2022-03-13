import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import NewsItem from  './NewsItem'

const NewsList = () => {
    const [articles,setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://indianexpress.com/')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
    },[])
    return (
        <div>
            {articles.map(article => {
                return(
                    <NewsItem
                        title={article.title}
                        description={article.description}
                        ur1={article.ur1ToImage}
                        ur1ToImage={article.ur1ToImage}
                   />
                )
                })}
            </div>
    )
}                  
    
export default NewsList