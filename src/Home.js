// list of all recipes in the database
import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() { 
        return(
        <div>
            <p>Home</p>
            <ol>
                {this.props.listOfRecipes.map((singleElement)=><li key={singleElement._id}><Link to={`/recipes/${singleElement._id}`}>{singleElement.title}</Link></li>)}
            </ol>
        </div>
        );
    }
}
 
export default Home;