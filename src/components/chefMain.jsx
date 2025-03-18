import React, { useState } from 'react'
import Clauderecipe from "./recipeclaude"
import IngredientList from "./ingredientsList"
import {getRecipeFromMistral} from '../../ai'

function Chefmain() 
{
    const [ingrediends,setingrediends]=useState([])
    const [recipe,setrecipe]=useState('')
    function handleSubmit(formData)
    {
        const newIn=formData.get('ingredient');
        setingrediends([...ingrediends,newIn])
    }
    async function getRecipe()
    {
        const recipe=await getRecipeFromMistral(ingrediends)
        setrecipe(recipe)
    }

  return (
    <main>
        <div id="container">
            <div id="header">
                <img src="https://th.bing.com/th/id/OIP.RXNUlLGV9aW3VnpQjBaqygHaHa?rs=1&pid=ImgDetMain" alt=""/>
                <h1> Chef Claude </h1>
            </div>
            <div id="content">
                <form action={handleSubmit} className='add-ingredient-form'>
                    <input type="text" placeholder='e.g. Tomata rice' name='ingredient'/>
                    <button>+ Add ingredient</button>
                </form>
                {ingrediends.length>0 && <IngredientList ingrediends={ingrediends} getRecipe={getRecipe}/>}
            </div>
            {recipe && <Clauderecipe recipe={recipe}/>}
        </div>
    </main>
  )
}

export default Chefmain