import { SubmitHandler, useForm } from "react-hook-form";
import style from "./style.module.css";

type FormType = {
  user_name: string;
  user_email : string;
  category: string;
};

const Review = () => {
  
  const{register, handleSubmit, formState:{errors}} = useForm<FormType>();
  console.log(errors);

  const onSubmit: SubmitHandler<FormType> = (data) =>{
    console.log(data);
  }
  return (
    <div>
      <h1 className={style.title}>Review</h1>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={style.label}>
          Name: <input className={style.input} type="text" {...register("user_name", {
            required:{
              value: true,
              message: "Обязательное поле",
            },
            minLength: {
              value: 2,
              message: "В поле с  именем недостаточно символов",
            },
            })}/>
        </label>
        {errors.user_name && <p>{errors.user_name.message}</p>}
        <br />
        <label >
          Email: <input className={style.input} type="email" {...register("user_email")}/>
        </label>
        <br />
        <select className={style.select} {...register("category")}>
          <option value="a">Select A</option>
          <option value="b">Select B</option>
          <option value="c">Select C</option>
        </select>
        <br />
        <button className={style.button} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Review;
