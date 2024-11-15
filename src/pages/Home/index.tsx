import style from "./style.module.css";
import image from "../../images/main.gif";

const Home = () =>{
  return(
    <div className={style.box}>
      <div className={style.home_container}>
        <img src={image} alt="foto" />
        <div className={style.info}>
          <h1 className={style.title}>
            Welcome to the World of Jelly Belly:
            </h1>
          <p>A Rainbow of Flavors Awaits</p>
        </div>
      </div>
    </div>
  );
};

export default Home;