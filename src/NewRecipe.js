import React from 'react';

class NewRecipe extends React.Component {

  handleSubmit(event) {
    event.preventDefault();
    let newRecipeObject = {
      title: event.target.title.value,
      imageURL: event.target.imageURL.value,
      prepTime: event.target.prepTime.value,
      ingredients: event.target.ingredients.value,
      story: event.target.story.value,
      directions: event.target.directions.value
    }
    // insert function to add object to database here
  }


  render() { 
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" /><br/>
        <label htmlFor="imageURL">Image URL: </label>
        <input type="text" id="imageURL" /><br/>
        <label htmlFor="prepTime">Prep Time: </label>
        <input type="text" id="prepTime" /><br/>
        <label htmlFor="ingredients">Ingredients: </label>
        <textarea type="text" id="ingredients" /><br/>
        <label htmlFor="story">Story: </label>
        <textarea type="text" id="story" /><br/>
        <label htmlFor="directions">Directions: </label>
        <textarea type="text" id="directions" /><br/>
        <button type="submit" className="btn btn-prim">Submit!</button>
      </form>
    </div>
    );
  }
}
 
export default NewRecipe;