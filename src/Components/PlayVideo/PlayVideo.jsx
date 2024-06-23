import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import likeIcon from '../../assets/like.png';
import dislikeIcon from '../../assets/dislike.png';
import shareIcon from '../../assets/share.png';
import saveIcon from '../../assets/save.png';
import profileIcon from '../../assets/jack.png';
import API_KEY from '../../data';
import { value_converter } from '../../data';

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    try {
      const VideoDetails_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
      const response = await fetch(VideoDetails_Url);
      const data = await response.json();
      setApiData(data.items[0]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching video data:', error);
      setLoading(false);
    }
  };

  const fetchChannelData = async () => {
    if (!apiData) return;

    try {
      const ChannelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
      const response = await fetch(ChannelData_url);
      const data = await response.json();
      setChannelData(data.items[0]);

      const commentData_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
      const ResponseCommentData = await fetch(commentData_url);
      const dataComment = await ResponseCommentData.json();
      setCommentData(dataComment.items);
    } catch (error) {
      console.error('Error fetching channel data:', error);
    }
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    if (apiData) {
      fetchChannelData();
    }
  }, [apiData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!apiData) {
    return <div>Failed to load video data.</div>;
  }

  return (
    <div className='play-video'>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        title="YouTube video player"
      ></iframe>
      <h3>{apiData.snippet.title}</h3>
      <div className="play-video-info">
        <p>{`${value_converter(apiData.statistics.viewCount)} Views • ${new Date(apiData.snippet.publishedAt).toDateString()}`}</p>
      </div>
      <div className="video-actions">
        <span><img src={likeIcon} alt="Like" /> {value_converter(apiData.statistics.likeCount)}</span>
        <span><img src={dislikeIcon} alt="Dislike" /></span>
        <span><img src={shareIcon} alt="Share" /></span>
        <span><img src={saveIcon} alt="Save" /></span>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData ? channelData.snippet.thumbnails.default.url : profileIcon} alt="Publisher profile" />
        <div>
          <p>{apiData.snippet.channelTitle}</p>
          <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : '1m'} subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData.snippet.description.slice(0, 250)}</p>
        <hr />
        <h4>{value_converter(apiData.statistics.commentCount)} Comments</h4>
        {commentData && commentData.map((item, index) => {
          const topLevelComment = item.snippet.topLevelComment.snippet;
          return (
            <div key={index} className="comments">
              <img src={topLevelComment.authorProfileImageUrl} alt="Commenter profile" />
              <div>
                <h3>{topLevelComment.authorDisplayName}</h3>
                <span>{new Date(topLevelComment.publishedAt).toDateString()}</span>
                <p>{topLevelComment.textDisplay}</p>
                <div className="comment-action">
                  <img src={likeIcon} alt="Like" />
                  <span>{value_converter(topLevelComment.likeCount)}</span>
                  <img src={dislikeIcon} alt="Dislike" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
