import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Recommend.css';
import {value_converter} from '../../data'
import API_KEY from '../../data';
import {Link} from 'react-router-dom'
const Recommend = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  
    const fetchData = async () => {
      const relatedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
      try {
        const response = await fetch(relatedVideoUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setApiData(data.items);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error.message);
        setLoading(false);
      }
    };
    useEffect(() => {
    fetchData();
  }, [categoryId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="recommend">
      {apiData.map((item, index) => (
        <Link  to={`/video/${item.snippet.categoryId}/${item.id}`}key={index} className="side-video-list">
          <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
          <div className="vid-info">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{value_converter(item.statistics.viewCount)} Views</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

Recommend.propTypes = {
  categoryId: PropTypes.string.isRequired,
};

export default Recommend;
