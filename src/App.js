import React from 'react';
import './App.css';
import Recipe from './recipe'
 
class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
        data : [],
        query:'chicken',
     };
}
 


 


 updateSearch = e =>{
   this.setState({
   query:e.target.value
   })
  }

 getSearch = e =>{
  e.preventDefault();
   
  this.setState({
    query:e.target.value
  })
}
render(){

  
    fetch(`https://api.edamam.com/search?q=${this.state.query}&app_id=${'b81a4636'}&app_key=${'449b56cb1927316dd70bbf2487e395fa'}`)
    .then((data)=>data.json().then(()=>{
      this.setState({
        data:data.hits
      })
    }))
    // const data = await response.json();
    // console.log(data.hits)
    // setRecipes(data.hits)
   
  
  
  return(
    <div className="App">
    <h1 >cook book </h1>
   
<form onSubmit={this.getSearch} className="searchForm">
  <input className="searchBar"onChange={this.updateSearch} value={this.state.query}/>
  <button
  
   className="searchButton" 
   type="submit"
   >search
   
   </button>
  </form> 
  <div >
  {this.state.data !== [] &&
    this.state.data.map(recipe =>(
     <Recipe key={recipe.recipe.label}
      title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}
     />
   ))}
    
   
   </div>
   </div>
  
  )}
}

export default App;
