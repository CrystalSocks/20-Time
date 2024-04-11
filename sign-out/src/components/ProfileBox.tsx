import React, { ReactNode } from "react";

interface Properties {
  //   children: ReactNode;
  onClick: () => void;
  name: string;
  image: string;
}

const ProfileBox = ({ onClick, name, image }: Properties) => {
  return (
    <>
      <div className="item-box" onClick={onClick}>
        <img className="pfp" src={image} />
        <h1 className="box-name">{name}</h1>
      </div>
    </>
  );
};

export default ProfileBox;
