import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './recipe'
import style from './recipe.module.css'

const App = () =>{

const APP_ID = 'b81a4636'
const APP_KEY='ae6b84fecdefdc1bc2cd563a619e55d5'
 
const[recipes,setRecipes] = useState([]);
const[search,setState] = useState([]);
const [query,setQuery] = useState('chicken')

useEffect(()=>{
  getRecipes();
 },[query])

const getRecipes =async () =>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${'b81a4636'}&app_key=${'449b56cb1927316dd70bbf2487e395fa'}`)
  const data = await response.json();
  console.log(data.hits)
  setRecipes(data.hits)
 
}

const updateSearch = e =>{
  setState(e.target.value)
 }

const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  setState('');
}
  return(
    <div className="App">
    <h1 className={style.recipe}>cook book </h1>
   
<form onSubmit={getSearch} className="searchForm">
  <input className="searchBar"onChange={updateSearch} value={search}/>
  <button
  
   className="searchButton" 
   type="submit"
   >search
   
   </button>
  </form> 
  <div  className="recipes">
  {recipes.map(recipe =>(
     <Recipe key={recipe.recipe.label}
      title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}
     />
   ))}
   </div>
   </div>
  
  )
}

export default App;
