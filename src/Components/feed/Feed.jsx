import React, { useEffect, useState } from 'react';
import './Feed.css';
import thumbnail11 from '../../assets/thumbnail1.png';
import thumbnail12 from '../../assets/thumbnail2.png';
import thumbnail13 from '../../assets/thumbnail3.png';
import thumbnail14 from '../../assets/thumbnail4.png';
import thumbnail15 from '../../assets/thumbnail5.png';
import thumbnail16 from '../../assets/thumbnail6.png';
import thumbnail17 from '../../assets/thumbnail7.png';
import thumbnail18 from '../../assets/thumbnail8.png';
import { Link } from 'react-router-dom';
import API_KEY from '../../data';
import { value_converter } from '../../data';

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    const videoList_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;

    try {
      const response = await fetch(videoList_Url);
      const result = await response.json();
      setData(result.items);
    } catch (error) {
      console.error('Error fetching the data:', error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [category]);

  return (
    <div className='feed'>
      {data.map((item, index) => (
        <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card" key={index}>
          <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
          <h3>{item.snippet.title}</h3>
          <h2>{item.snippet.channelTitle}</h2>
          <p>{value_converter(item.statistics.viewCount)} views &bull;{(item.snippet.publishedAt)}</p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
