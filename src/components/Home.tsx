import React, { FC } from "react";
import { useAuth } from "../context/AuthContext";
import { AuthContextType } from "../interface";
import Balance from "./Balance";
import Modal from "./modal/Modal";
import Track from "./track/Track";

const Home: FC = () => {
  const { user } = useAuth() as AuthContextType;

  console.log(user);
  
  return (
    <>
      <Modal />
      <Balance />
      <Track />
    </>
  );
};

export default Home;
