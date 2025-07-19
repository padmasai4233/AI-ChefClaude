import React, { useState } from 'react';
import Clauderecipe from "./recipeclaude";
import IngredientList from "./ingredientsList";
import { getRecipeFromMistral } from '../../ai';

function Chefmain() {
  const [ingrediends, setingrediends] = useState([]);
  const [recipe, setrecipe] = useState('');
  const [isLoading, setIsLoading] = useState(false); // 🆕 loading state

  function handleSubmit(formData) {
    const newIn = formData.get('ingredient');
    setingrediends([...ingrediends, newIn]);
  }

  async function getRecipe() {
    setIsLoading(true); // 🆕 start loading
    try {
      const recipe = await getRecipeFromMistral(ingrediends);
      setrecipe(recipe);
    } catch (err) {
      alert("Failed to fetch recipe.");
    } finally {
      setIsLoading(false); // 🆕 stop loading
    }
  }

  return (
    <main>
      <div id="container">
        <div id="header">
          <img
            src="https://th.bing.com/th/id/OIP.RXNUlLGV9aW3VnpQjBaqygHaHa?rs=1&pid=ImgDetMain"
            alt=""
          />
          <h1> Smart Chef </h1>
        </div>

        <div id="content">
          <form action={handleSubmit} className="add-ingredient-form">
            <input type="text" placeholder="e.g. Tomato rice" name="ingredient" />
            <button>+ Add ingredient</button>
          </form>

          {ingrediends.length > 0 && (
            <>
              <IngredientList
                ingrediends={ingrediends}
                getRecipe={getRecipe}
                isLoading={isLoading} // 🆕 pass loading prop
              />
              {isLoading && <p style={{ marginTop: "10px" }}>⏳ Generating recipe...</p>}
            </>
          )}
        </div>

        {!isLoading && recipe && <Clauderecipe recipe={recipe} />}
      </div>
    </main>
  );
}

export default Chefmain;
