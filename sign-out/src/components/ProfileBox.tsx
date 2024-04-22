import React, { ReactNode } from "react";
import { useState } from "react";
import Form from "../components/Form";

interface Properties {
  //   children: ReactNode;
  onClick: () => void;
  name: string;
  image: string;
  email: string;
}

const ProfileBox = ({ onClick, name, image, email, t_name }: Properties) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
      <div
        className="item-box"
        onClick={() => (isToggled ? null : setIsToggled(true))}
      >
        {isToggled && <img className="pfp" src={image} />}
        <h1 className="box-name">{name}</h1>
        {isToggled && (
          <Form
            email={email}
            onClose={() => setIsToggled(false)}
            t_name={name}
          />
        )}
      </div>
    </>
  );
};

export default ProfileBox;
