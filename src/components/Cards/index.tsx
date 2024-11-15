import { useState, useEffect, FC } from "react";
import style from "./style.module.css";
import Card from "../Card";
import { Bean } from "../../types/bean";

type Props = {
  filterValue: string;
};

const Cards: FC<Props> = ({ filterValue }) => {
  const [updateBeans, setUpdateBeans] = useState<Bean[] | null>(null);
  const [initialBeans, setInitialBeans] = useState<Bean[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const req = await fetch(
        "https://jellybellywikiapi.onrender.com/api/Beans?pageIndex=1&pageSize=100"
      );
      const data = await req.json();
      setInitialBeans(data.items);
      setUpdateBeans(data.items);
    } catch (e) {
      console.error("error->", e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (filterValue) {
      setUpdateBeans(
        initialBeans?.filter((item) =>
          item.flavorName.toLowerCase().includes(filterValue.toLowerCase())
        ) || null
      );
    } else {
      setUpdateBeans(initialBeans);
    }
  }, [filterValue, initialBeans]);

  return (
    <div className={style.container}>
      {isLoading && <p>...Loading</p>}
      {isError && <p>...Error occurred. Try reloading the page.</p>}
      {updateBeans &&
        updateBeans.map((bean) => <Card data={bean} key={bean.beanId} />)}
    </div>
  );
};

export default Cards;
