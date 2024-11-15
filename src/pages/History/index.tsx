import { useState, useEffect } from "react";
import style from "./style.module.css";

type MileStone = {
  id: number;
  year: number;
  description: string;
};

const History = () => {
  const [mileStones, setMileStones] = useState<MileStone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Функция для получения данных с API
  const fetchHistory = async () => {
    try {
      setIsLoading(true);
      setIsError(false);

      const response = await fetch("https://jellybellywikiapi.onrender.com/api/mileStones");
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Fetched history data:", data);

      // Проверка, что data.items существует и является массивом
      if (data?.items && Array.isArray(data.items)) {
        setMileStones(data.items);
      } else {
        console.error("Data format is incorrect:", data);
        setMileStones([]);
      }
    } catch (error) {
      console.error("Error fetching history data:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className={style.container}>
      <h1 className={style.title}>History...</h1>

      {isLoading && <p className={style.loading}>Loading...</p>}
      {isError && <p className={style.error}>Произошла ошибка при загрузке данных.</p>}

      <div className={style.historyList}>
        {Array.isArray(mileStones) && mileStones.length > 0 ? (
          mileStones.map((milestone) => (
            <div key={milestone.id} className={style.milestoneCard}>
              {/* Отображаем год как заголовок */}
              <h2 className={style.milestoneYear}>{milestone.year}</h2>
              {/* Отображаем описание события */}
              <p className={style.milestoneDescription}>{milestone.description}</p>
            </div>
          ))
        ) : (
          !isLoading && !isError && <p>Нет доступных данных о вехах.</p>
        )}
      </div>
    </div>
  );
};

export default History;
