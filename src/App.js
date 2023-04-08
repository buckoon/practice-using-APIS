import React, {useState, useEffect} from 'react'

function App() {

 



  

    const APP_ID ="a8eae6ae"
    const APP_KEY="5b568d90ce92b186c7bb5e241f468679"
    
   
   

     useEffect(() =>{
      getRecipes();
     },[]);
  
     const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
      const data = await response.json();
      console.log(data);
     }

  return (
    <div className="App">
      <form className="search-form" >
        <input className="search-bar" type="text" />
        <button  className="search-button" type="submit">Search</button>
      
      </form>
     
    
    </div>
  )
}

export default App
