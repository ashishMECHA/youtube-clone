import React from 'react'
import logo from "../assets/YouTube-Logo.wine.svg"



const commentsData = [
    {
        name: "Ashish Thakur",
        text: "Lorem ipsum dolor sit amrj acoejfn aeje",
        replies:[{
            name: "Ashish Thakur",
            text: "Lorem ipsum dolor sit amrj acoejfn aeje",
            replies:[{
                name: "Ashish Thakur",
                text: "Lorem ipsum dolor sit amrj acoejfn aeje",
                replies:[]
            },]
        },]
    },
    {
        name: "Ashish Thakur",
        text: "Lorem ipsum dolor sit amrj acoejfn aeje",
        replies:[{
            name: "Ashish Thakur",
            text: "Lorem ipsum dolor sit amrj acoejfn aeje",
            replies:[{
                name: "Ashish Thakur",
                text: "Lorem ipsum dolor sit amrj acoejfn aeje",
                replies:[{
                    name: "Ashish Thakur",
                    text: "Lorem ipsum dolor sit amrj acoejfn aeje",
                    replies:[]
                },]
            },]
        },]
    },
    {
        name: "Ashish Thakur",
        text: "Lorem ipsum dolor sit amrj acoejfn aeje",
        replies:[{
            name: "Ashish Thakur",
            text: "Lorem ipsum dolor sit amrj acoejfn aeje",
            replies:[{
                name: "Ashish Thakur",
                text: "Lorem ipsum dolor sit amrj acoejfn aeje",
                replies:[{
                    name: "Ashish Thakur",
                    text: "Lorem ipsum dolor sit amrj acoejfn aeje",
                    replies:[]
                },]
            },]
        },]
    },
]
const Comment = ({data})=>{
    const {name, text,replies} = data;
    return <div className="flex">
<img src={logo} className="w-12 h-12 border-none rounded-full "/>
    <div className='px-3 font-bold'>
        <p>{name}</p>
        <p>{text}</p>
    </div>
    </div>
}

const CommentsList =({comments})=>{
    return comments.map((comment,index)=>(
    <div>
    <Comment key={index} data={comment}/>
        <div className="pl-5 border-l-black ml-5">
        {/* <Comment key={i} data={comment}/>
        <Comment key={i} data={comment}/>
        <Comment key={i} data={comment}/> */}
<CommentsList comments={comment.replies}/>
</div>    
</div>

    
    ))
}


const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
        <p className='text-2xl font-bold'>Comments: </p>
        <CommentsList comments = {commentsData}/>
    </div>
  )
}

export default CommentsContainer