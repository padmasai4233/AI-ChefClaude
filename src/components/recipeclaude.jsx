import React from 'react'
import Reactmarkdown from 'react-markdown'
const recipeclaude = (props) => {
  return (
    <>
        <section id='recipeMenu' aria-live="polite">
            <h1>Suggested Recipe</h1>
            <Reactmarkdown>
                {props.recipe}
            </Reactmarkdown>
        </section>
    </>
  )
}

export default recipeclaude