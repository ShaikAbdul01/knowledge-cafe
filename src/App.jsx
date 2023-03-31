import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import BlogCard from "./Components/BlogCard/BlogCard.jsx";
import SingleBlogCard from "./Components/SingleBlogCard/SingleBlogCard";

function App() {
 /*  const [time, setTime] = useState(0);
  const timeOnRead = (time) => {
    const previousTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousTime) {
      const sum = previousTime + time;
      localStorage.setItem("readTime", sum);
      setTime(sum);
    } else {
      localStorage.setItem("readTime", time);
      setTime(time);
    }
  }; */

  return (
    <div className="App">
      <Header></Header>
      <BlogCard></BlogCard>
      <SingleBlogCard ></SingleBlogCard>
    </div>
  );
}

export default App;
