import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom';
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
    <div className='flex flex-wrap ml-[262px] mt-4 gap-x-5 gap-y-8 '>
        
        {videos.map((card) => (
          <Link key={card.id} to={"/watch?v="+ card.id}><VideoCard info = {card}/></Link>

        )
        )} 
    </div>
  )
}

export default CardsContainer