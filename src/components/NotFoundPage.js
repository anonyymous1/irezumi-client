import React from 'react';
import { Link } from 'react-router-dom';
class NotFoundPage extends React.Component{
    render(){
        return <div>
            <img className="error-image" src="https://i.imgur.com/GNO2zOb.jpg" alt="404image"/>
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home</Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;