import React from 'react';

class SingleRecipe extends React.Component {

    componentDidMount(){
        fetch(`http://localhost:5000/recipes/${this.props.params.id}`)
        .then((response)=>response.json())
        .then(data=>this.setState({listOfRecipes: data}))
      }


    render() { 
        return <div></div>;
    }
}
 
export default SingleRecipe;