import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import BlogCard from "./Components/BlogCard/BlogCard.jsx";
import Question from "./Components/Question/Question";
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0);
  const increaseCount=()=>{
    const newCount=count+1;
    setCount(newCount)
  }
  const [time, setTime] = useState(0);
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
  };

  
  return (
    <div className="App">

      <Header></Header>
      <BlogCard timeOnRead={timeOnRead} time={time} increaseCount={increaseCount} count={count}></BlogCard>
      <Question></Question>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
