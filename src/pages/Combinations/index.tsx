import { useState, useEffect } from "react";
import style from "./style.module.css";

type Combination = {
  combinationId: number;
  name: string;
  tag: string[];
};

const Combinations = () => {
  const [combinations, setCombinations] = useState<Combination[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Функция для получения данных с API
  const fetchCombinations = async () => {
    try {
      setIsLoading(true);
      setIsError(false);

      const response = await fetch("https://jellybellywikiapi.onrender.com/api/combinations");
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Fetched data:", data);

      // Проверка, что data.items существует и является массивом
      if (data?.items && Array.isArray(data.items)) {
        setCombinations(data.items);
      } else {
        console.error("Data format is incorrect:", data);
        setCombinations([]);
      }
    } catch (error) {
      console.error("Error fetching combinations:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCombinations();
  }, []);

  return (
    <div className={style.container}>
      <h1 className={style.title}>Combinations</h1>

      {isLoading && <p className={style.loading}>Loading...</p>}
      {isError && <p className={style.error}>Произошла ошибка при загрузке данных.</p>}

      <div className={style.combinationsList}>
        {Array.isArray(combinations) && combinations.length > 0 ? (
          combinations.map((combo) => (
            <div key={combo.combinationId} className={style.combinationCard}>
              <h2 className={style.comboName}>{combo.name}</h2>
              {/* Выводим комбинацию вкусов из tag */}
              <p className={style.comboDescription}>
                {combo.tag.join(" ")}
              </p>
            </div>
          ))
        ) : (
          !isLoading && !isError && <p>Нет доступных комбинаций.</p>
        )}
      </div>
    </div>
  );
};

export default Combinations;
