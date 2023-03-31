import React, { useEffect, useState } from 'react';

const SideCard = ({time}) => {
    const [newTime,setNewTime]=useState(time)
    useEffect(()=>{
        const getTime=localStorage.getItem("readTime")
        setNewTime(getTime)
    },[time])

    return (
        <div>
            <div className="my-5 text-primary p-5 px-8 mx-auto border-2 text-center font-bold">
                <p>Spent time on read :{newTime} min</p>
            </div>
            <div className="bg-slate-100 mx-auto text-center mt-5 p-5 rounded-xl">
                <p>Bookmarked Blogs : 8</p>
                <div className="p-8">
                    <p>Master Microsoft Power Platform and Become an In-Demand!</p>
                </div>
            </div>
        </div>
    );
};

export default SideCard;