import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const handleClick = (value) => {
    // if(value === 'All') {
    //   // get all videos
    // } else {
    //   getVideosByCategory(value)
    // }
    getVideosByCategory(value)
  }

  const getVideosByCategory = async (value) => {
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=50&q=${value}&key=AIzaSyB3sRtuNSB08c6N3hnSlUy4T8ql7sz3iRk`)
    const json = await data.json();
    console.log(json);
  }

  const categories = ["All", "Music", "News", "Music", "Cricket", "Football", "FIFA", "Java", "JavaScript","Martial Arts", "MMA"]
  return (
    <div className='flex ml-[256px] sticky -z-10'>
      {categories.map((category,i)=>
      <div className="px-4 py-[6px] m-3 bg-gray-100 text-sm rounded-lg cursor-pointer" onClick={(category)=>{handleClick(category)}} key={i}>{category}</div>
      )}
    </div>
  )
}

export default ButtonList