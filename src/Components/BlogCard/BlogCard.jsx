import React, { useEffect, useState } from "react";
import SideCard from "../SideCard/SideCard";
import { toast } from "react-hot-toast";

const BlogCard = ({timeOnRead,time,count,increaseCount}) => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  }, []);

  return (
    <div className="md:flex">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-12">
        <div className="col-span-2 p-5">
          {blogData?.map((data) => (
            <SingleBlogCard
             key={data.id} blogData={data}
            timeOnRead={timeOnRead}
            increaseCount={increaseCount}
            ></SingleBlogCard>
          ))}
        </div>
      </div>
      <div className="mx-12">
        <SideCard time={time}
        count={count}
        ></SideCard>
      </div>
    </div>
  );
};

const SingleBlogCard = ({ blogData ,timeOnRead,increaseCount}) => {
 
  const {
    blog_cover_image,
    author_image,
    author_name,
    reading_time,
    publish_date,
    blog_title,
  } = blogData;

  
 
  return (
    <div className="my-5">
      <img
        className="w-[845px] h-[450px] rounded-md"
        src={blog_cover_image}
        alt=""
      />
      <div className="flex items-center justify-between mx-5">
        <div className="flex items-center my-5">
          <div>
            <img
              className="w-[60px] h-[60px] rounded-full"
              src={author_image}
              alt=""
            />
          </div>
          <div className="ml-5">
            <h4 className="text-xl font-semibold">{author_name}</h4>
            <p className="text-sm">{publish_date}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold mr-5">{reading_time} min read</p>
          <button onClick={increaseCount}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-bold">{blog_title}</h2>
      <div className="flex my-5">
        {blogData.tags.map((tag) => (
          <p className="mx-2 font-semibold">{tag}</p>
        ))}
      </div>
      <button
        onClick={() => timeOnRead(blogData.reading_time)}
        className="text-indigo-500 font-semibold underline"
      >
        Mark As Read
      </button>
      <hr className="my-8" />
    </div>
  );
};

export default BlogCard;
