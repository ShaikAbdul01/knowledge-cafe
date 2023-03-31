import React from "react";
import profile from "../../Image/download.png";
const Header = () => {
  return (
    <>
      <nav className="m-12 flex justify-between items-center  ">
        <h1 className="text-4xl font-bold">Knowledge Cafe</h1>

        <div className="h-[60px] w-[60px]">
          <img src={profile} alt="" srcset="" />
        </div>
      </nav>
      <hr className="mx-12 border" />
    </>
  );
};

export default Header;
