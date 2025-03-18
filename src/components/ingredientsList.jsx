export default function IngredientsList(props)
{
    const ingreList=props.ingrediends.map(i=>(
        <li>{i}</li>
    ))
    return(
        <>
            <div id="contentMain">
                    <h2>Ingredients for the recipe</h2>
                    <ul>
                        {ingreList}
                    </ul>
                    {props.ingrediends.length > 3 && <div id="contentGet">
                        <div id="getSide1">
                            <h3>Ready For Recipe ?</h3><br />
                            <p>Generate recipe from your ingredients</p>
                        </div>
                        <button onClick={props.getRecipe}>Get a recipe</button>
                    </div>}
            </div>
        </>
    )
}