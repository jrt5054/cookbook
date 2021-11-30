// list of all recipes in the database
import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() { 
        return(
        <div>
            <p>Home</p>
            <ol>
                {this.props.listOfRecipes.map((singleElement)=>{
                    return <li key={singleElement._id}><Link to={`/recipes/${singleElement._id}`}>{singleElement.title}</Link><button className="btn btn-danger">X</button></li>})}
            </ol>
        </div>
        );
    }
}
 
export default Home;