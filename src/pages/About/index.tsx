import style from "./style.module.css";


const About = () =>{
  return(
    <div>
      <h1 className={style.title}>About Us</h1>
      <div className={style.box}>
      <h3 className={style.subtitle}>Mission</h3>
      <p className={style.text}>
        Jelly Belly Candy Company is dedicated to producing the highest quality confections, delivering superior customer service and creating a reliable and enjoyable confectionery line for the consuming public. We seek out the finest ingredients and employ state of the industry manufacturing processes. We strive to be a responsible corporate citizen in all parts of the world to ensure high quality and safety standards in our business.</p>
      <p className={style.text}>
        We intend that the public, our consumers and business partners have confidence in the products bearing our name and that our products are manufactured in accordance with a guiding code of conduct.</p>
      <p className={style.text}>
        Jelly Belly is committed to conducting business with ethical business standards and asks its vendors, suppliers and licensees to conduct themselves in the same manner.
      </p>
      </div>
    </div>
  )
}

export default About;