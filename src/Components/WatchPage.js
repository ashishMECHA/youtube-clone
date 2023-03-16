import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import RandomvCard from "./RandomvCard";
import logo from "../assets/YouTube-Logo.wine.svg";
import ShowMoreText from "react-show-more-text";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  return (
    <div className="grid grid-cols-6 gap-3">
      <div className="mt-5 px-5 col-span-4">
        <div className="">
          <iframe
            width="100%"
            height="450px"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <div className="flex flex-col pb-2 border-b-2 mt-2">
            <p>Video Title</p>
            <div className="flex justify-between">
              <div className="flex">
                <p>Views</p>
                <p>•</p>
                <p>7 months ago</p>
              </div>
              <div className="flex gap-x-4">
                <p className="flex">
                  <MdThumbUp size={26} />
                  5k
                </p>
                <p className="flex">
                  <MdThumbDown size={26} />
                  200
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex m-1">
              <img
                src={logo}
                className="w-12 h-12 border-none rounded-full "
                alt="channel"
              />
              <div className="flex flex-col">
                <p>channel name</p>
                <p>10k subscribers</p>
              </div>
            </div>
            <div>
              <button className="mt-2 pl-2 pt-2 pb-2 pr-2 bg-[red] text-sm uppercase tracking-[0.5px] text-white inline-block">
              SUBSCRIBE
            </button>
            </div>
          </div>
          <div className="text-[0.9rem] border-b-2">
            <ShowMoreText
              Lines={3}
              more="Show more"
              Less="Show less"
              expanded={false}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              perferendis vero dolorem praesentium doloribus minus nisi fugiat
              mollitia reiciendis et, quibusdam laboriosam voluptatibus omnis
              placeat, vitae aut! Officiis, aspernatur eum laboriosam nam,
              accusamus ipsa harum magni exercitationem error itaque soluta
              deserunt. Maiores excepturi, exercitationem iure maxime ad et
              perspiciatis magnam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              perferendis vero dolorem praesentium doloribus minus nisi fugiat
              mollitia reiciendis et, quibusdam laboriosam voluptatibus omnis
              placeat,
            </ShowMoreText>
          </div>

          <div className="mt-3">
            <p>236 comments</p>
            <div className="">
              <img src={logo} className="rounded-full w-12 h-12 mr-2" alt="" />
              <form className="flex">
                <input type="text" className="w-[90%]" placeholder="Drop a comment" />
                <button className="p-1 text-sm">Comment</button>
              </form>
              <CommentsContainer/>

            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col border-2 col-span-2">
        {/* {Array(10).map(()=>{
        <RandomvCard/>
      })} */}
        Video Video Video Video Video Video Video Video Video Video Video Video
        Video Video Video Video
      </div>
    </div>
  );
};

export default WatchPage;
