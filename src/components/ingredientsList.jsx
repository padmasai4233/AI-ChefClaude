export default function IngredientsList(props)
{
    const ingreList = props.ingrediends.map((i, index) => (
        <li key={index}>{i}</li>
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
                        <button onClick={props.getRecipe} disabled={props.isLoading}>
                            {props.isLoading ? (
                                <span className="spinner"></span>
                            ) : (
                                "Get a recipe"
                            )}
                        </button>
                    </div>}
            </div>
        </>
    )
}