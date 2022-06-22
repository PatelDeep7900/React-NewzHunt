import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setloading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false);
        props.setProgress(100);
    }
    useEffect(
        () => {
            document.title = `${capitalizeFirstLetter(
                props.category
            )} - NewzHunt`;
            updateNews();
            // eslint-disable-next-line
        },
        []

    )

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setpage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
    }
    return (
        <>
            <h1
                className="text-center"
                style={{ margin: "35px 0px", marginTop: "90px" }}
            >{`NewzHunt - Top ${capitalizeFirstLetter(
                props.category
            )} Headlines`}</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">


                    <div className="row">
                        {
                            articles.map((element) => {
                                return (
                                    <div className="col-md-4" key={element.url}>
                                        <NewsItem
                                            title={element.title ? element.title : ""}
                                            author={element.author}
                                            source={element.source.name}
                                            date={element.publishedAt}
                                            description={element.description ? element.description : ""}
                                            ImgUrl={element.urlToImage}
                                            NewsUrl={element.url}
                                          
                                        />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </InfiniteScroll>


        </>
    );

}
News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: 'general'
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
};
export default News;
