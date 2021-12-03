import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// class SingleRecipe extends React.Component {

    // componentDidMount(){
    //     fetch(`http://localhost:5000/recipes/${this.props.params.id}`)
    //     .then((response)=>response.json())
    //     .then(data=>this.setState({listOfRecipes: data}))
    //   }


//     render() { 
//         console.log(this.props.match.params.id)
//         return (
//             <div>
//                 test
//             </div>
//             );
//     }
// }
 
// export default SingleRecipe;

function SingleRecipe() {
    let { id } = useParams();
    const [recipe, setRecipe] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/recipes/${id}`)
        .then((response)=>response.json())
        .then(data=>setRecipe(data))
        
    },[])

    return (
        <div>
            <h1>Title: {recipe.title}</h1>
            <img src={recipe.imageURL} alt="picture" width="500" />
            <p>Prep Time: {recipe.prepTime}</p>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Story: {recipe.story}</p>
            <p>Directions: {recipe.directions}</p>
        </div>
    );
}

export default SingleRecipe;