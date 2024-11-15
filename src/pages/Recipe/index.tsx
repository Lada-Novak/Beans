import { useState, useEffect } from "react";
import style from "./style.module.css";

type Recipe = {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string;
};

const RecipePage = () => {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  const fetchRecipes = async () => {
    try {
      setIsLoading(true);
      setIsError(false);

      const response = await fetch("https://jellybellywikiapi.onrender.com/api/recipes");
      if (!response.ok) throw new Error("Failed to fetch data");

      const data = await response.json();
      setRecipes(data.items);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className={style.container}>
      <h1 className={style.title}>Recipes</h1>

      {isLoading && <p className={style.loading}>Loading...</p>}
      {isError && <p className={style.error}>Произошла ошибка при загрузке данных.</p>}

      <div className={style.recipesList}>
        {recipes?.map((recipe) => (
          <div key={recipe.id} className={style.recipeCard}>
            <h2 className={style.recipeName}>{recipe.name}</h2>
            <p className={style.recipeDescription}>{recipe.description}</p>
            <h3 className={style.ingredientsTitle}>Ингредиенты:</h3>
            <ul className={style.ingredientsList}>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3 className={style.instructionsTitle}>Инструкции:</h3>
            <p className={style.instructions}>{recipe.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipePage;
