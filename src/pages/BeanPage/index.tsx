import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./style.module.css";
import { Bean } from "../../types/bean";

const BeanPage = () => {
  const params = useParams();
  const [beanData, setBeanData] = useState<Bean | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const req = await fetch(
          `https://jellybellywikiapi.onrender.com/api/beans/${params.id}`
        );
        const data: Bean = await req.json();
        setBeanData(data);
      } catch (e) {
        console.log("Error->", e);
      }
    };

    if (params.id) {
      getData();
    }
  }, [params.id]); 

  return (
    <div className={style.box}>
      {beanData && (
        <div className={style.wrapper}>
          <img src={beanData.imageUrl} alt="foto" />
          <div>
            <h1>{beanData.flavorName}</h1>
            <p>{beanData.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeanPage;
