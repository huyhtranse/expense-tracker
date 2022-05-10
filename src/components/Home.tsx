import { FC } from "react";
import Balance from "./Balance";
import Modal from "./modal/Modal";
import Track from "./track/Track";

const Home: FC = () => {
  return (
    <>
      <Modal />
      <Balance />
      <Track />
    </>
  );
};

export default Home;
