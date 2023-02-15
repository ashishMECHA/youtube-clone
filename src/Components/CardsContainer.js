import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { CHANNEL_INFO_API, YOUTUBE_VIDEOS_API } from '../utils/Constants';
import VideoCard from './VideoCard';

const CardsContainer = () => {

    const[videos, setVideos] = useState([]);
    const[channelIcon, setChannelIcon] = useState({});
    

    useEffect(()=>{
        getCards()
    },[])

    async function getCards(){
       const data = await fetch(YOUTUBE_VIDEOS_API);
       const json = await data.json();
       setVideos(json.items);
    }

    

    

  return (
    <div className='flex flex-wrap ml-8 mt-4 gap-x-6'>
        {videos.map((card)=>
            <VideoCard info = {card}/>
        )}
    </div>
  )
}

export default CardsContainer