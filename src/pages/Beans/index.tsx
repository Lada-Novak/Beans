import { useState } from "react";
import Cards from "../../components/Cards";
import Search from "../../components/Search";

const Beans = () =>{
  const [filterValue, setFilterValue] = useState("");
  return(
    <div>
      <Search setFilterValue = {setFilterValue}/>
      <Cards filterValue = {filterValue}/>
    </div>
  )
}

export default Beans;