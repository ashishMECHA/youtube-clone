import React from 'react'
import { AiFillHome } from "react-icons/ai"
import {BiCaretUpSquare} from "react-icons/bi"
import {MdOutlineSubscriptions} from "react-icons/md"
import {CgYoutube} from "react-icons/cg"
import {SiYoutubemusic} from "react-icons/si"
import {MdOutlineVideoLibrary} from "react-icons/md"
import {GrHistory} from "react-icons/gr"
import {CiYoutube} from "react-icons/ci"
import {MdOutlineWatchLater} from "react-icons/md"
import {RxDownload} from "react-icons/rx"
import {AiOutlineLike} from "react-icons/ai"
import {FiChevronDown} from "react-icons/fi"
import { useSelector } from 'react-redux'



const SideBar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  if(!isMenuOpen) return null; //Early return pattern

  return (
    
<div className='w-[250px] flex-col text-base font-medium pl-5 h-[100%] bg-white fixed top-15'>
        <div className='flex flex-col pl-2 p-3 border-b-2 border-slate-200'>
            <p className='pt-2 pb-2 hover:bg-slate-100 rounded-xl pl-2 cursor-pointer flex'><AiFillHome className='mt-[3px] text- mr-4'/>Home</p>
            <p className='pt-2 pb-2 hover:bg-slate-100  rounded-xl pl-2 cursor-pointer flex'><BiCaretUpSquare className='mt-[3px] text- mr-4'/>Shorts</p>
            <p className='pt-2 pb-2 hover:bg-slate-100 rounded-xl pl-2 cursor-pointer flex'><MdOutlineSubscriptions className='mt-[3px] text- mr-4'/>Subscriptions</p>
            <p className='pt-2 pb-2 hover:bg-slate-100 rounded-xl pl-2 cursor-pointer flex'><CgYoutube className='mt-[3px] text- mr-4'/>Originals</p>
            <p className='pt-2 pb-2 hover:bg-slate-100 rounded-xl pl-2 cursor-pointer flex'><SiYoutubemusic className='mt-[3px] text- mr-4'/>YouTube Music</p>
        </div>
        <div className='flex-col p-3 border-b-[1px] border-slate-200'>
            <p className='pt-2 pb-2 hover:bg-slate-100 rounded-xl pl-2 cursor-pointer flex'><MdOutlineVideoLibrary className='mt-[3px] text- mr-4'/>Library</p>
            <p className='pt-2 pb-2 hover:bg-slate-100 rounded-xl pl-2 cursor-pointer flex'><GrHistory className='mt-[3px] text- mr-4'/>History</p>
            <p className='pt-2 pb-2 hover:bg-slate-100 rounded-xl pl-2 cursor-pointer flex'><CiYoutube className='mt-[3px] text- mr-4'/>Your videos</p>
            <p className='pt-2 pb-2 hover:bg-slate-100 rounded-xl pl-2 cursor-pointer flex'><MdOutlineWatchLater className='mt-[3px] text- mr-4'/>Watch Later</p>
            <p className='pt-2 pb-2 hover:bg-slate-100 rounded-xl pl-2 cursor-pointer flex'><RxDownload className='mt-[3px] text- mr-4'/>Downloads</p>
            <p className='pt-2 pb-2 hover:bg-slate-100 rounded-xl pl-2 cursor-pointer flex'><AiOutlineLike className='mt-[3px] text- mr-4'/>Liked videos</p>
            <p className='pt-2 pb-2 hover:bg-slate-100 rounded-xl pl-2 cursor-pointer flex'><FiChevronDown className='mt-[3px] text- mr-4'/>Show more</p>
        </div>
    </div>

    
  )
}

export default SideBar