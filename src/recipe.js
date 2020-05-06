import React from 'react';
// import style from './recipe.module.css'
 class Recipe extends React.Component{
     render() {
       const  {title,calories,image,ingredients} = this.props
         return (
            <div  >
            <img  src={image}/>

            <h1 >{title}</h1>
            <ol>
                  {ingredients.map(ingredient =>(
                      <li>{ingredient.text}</li>
                  ))}
            </ol>
            <p>{ calories}</p>

        </div> 
         );
     }
 }

 

export default Recipe