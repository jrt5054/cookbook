// list of all recipes in the database
import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

class Home extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    console.log(event.target.id);
    this.props.removeRecipe(event.target.id);
  }

  

  render() {
    let defaultRecipeInput = {
      title: "",
      imageURL: "",
      prepTime: "",
      ingredients: "",
      story: "",
      directions: "",
    }
    return (
      <div>
        <p>Home</p>
        <ol>
          {this.props.listOfRecipes.map((singleElement) => {
            return (
              <li key={singleElement._id}>
                <Link to={`/recipes/${singleElement._id}`}>
                  {singleElement.title}
                </Link>
                <button
                  id={singleElement._id}
                  onClick={this.handleClick}
                  className="btn btn-danger"
                >
                  X
                </button>
              </li>
            );
          })}
        </ol>
        <Form addRecipe={this.props.addRecipe} defaultRecipeInput={defaultRecipeInput}/>
      </div>
    );
  }
}

export default Home;
