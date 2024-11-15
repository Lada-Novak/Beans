import { useState, useEffect } from "react";
import style from "./style.module.css";

type Fact = {
  id: string;
  title: string;
  description: string;
};

const Facts = () => {
  const [facts, setFacts] = useState<Fact[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchFacts = async () => {
    try {
      setIsLoading(true);
      setIsError(false);

      const response = await fetch("https://jellybellywikiapi.onrender.com/api/facts");
      if (!response.ok) throw new Error("Failed to fetch data");

      const data = await response.json();
      setFacts(data.items);
    } catch (error) {
      console.error("Error fetching facts:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFacts();
  }, []);

  return (
    <div className={style.container}>
      <h1 className={style.title}>Facts...</h1>

      {isLoading && <p className={style.loading}>Loading...</p>}
      {isError && <p className={style.error}>Произошла ошибка при загрузке данных.</p>}

      <div className={style.factsList}>
        {facts?.map((fact) => (
          <div key={fact.id} className={style.factCard}>
            <h2 className={style.factTitle}>{fact.title}</h2>
            <p className={style.factDescription}>{fact.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facts;
