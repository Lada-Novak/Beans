import { ChangeEvent, useState, Dispatch, SetStateAction, FC } from "react";
import style from "./style.module.css";

type Props = {
  setFilterValue: Dispatch<SetStateAction<string>>;
};

const Search: FC<Props> = ({ setFilterValue }) => {
  const [inputValue, setInputValue] = useState("");


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };


  const handleClick = () => {
    setFilterValue(inputValue);
  };

  return (
    <div className={style.container}>
      <input
        className={style.input}
        value={inputValue}
        type="text"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Найти</button>
    </div>
  );
};

export default Search;
