import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import SingleRecipe from './SingleRecipe';
import NewRecipe from './NewRecipe';

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      listOfRecipes: []
    }
    this.addRecipe = this.addRecipe.bind(this)
  }

  componentDidMount(){
    fetch('http://localhost:5000/recipes/')
    .then((response)=>response.json())
    .then(data=>this.setState({listOfRecipes: data}))
  }

  // removeRecipe() {

  //   }
  

  addRecipe(recipeObj) {
    fetch('http://localhost:5000/recipes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipeObj)
    })
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data)
      this.setState({listOfRecipes: [...this.state.listOfRecipes, data]})
    })
  }

  render() {
    return(
      <Router>
        <Header />
          {/* Homepage with links to all recipies as well as an "Add recipe" button that will take you to the add recipe form page */}
          {/* individual recipe pages will have all applicable information displayed as well as an edit and delete button */}
          
          <Routes>
            <Route exact path="/" element={<Home listOfRecipes={this.state.listOfRecipes}/>} />
            <Route exact path="/recipes/:id" element={<SingleRecipe />} />
          </Routes>
          <h2>Add Your Own Recipe!</h2>
          <NewRecipe addRecipe={this.addRecipe}/>
      </Router>
    );
  }
}
 
export default App;