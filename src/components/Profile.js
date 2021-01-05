import { Link } from 'react-router-dom'

const Profile = (props) => {

    console.log(props.user.imageURL);
    const userData = props.user ?
    (<div>
        <h1>Profile</h1>
        <div>
            <img src={props.user.imageURL} alt={props.user.name}/>
            <div>
                
                <p><strong>Name:</strong> { props.user.name } </p>
                <p><strong>Email:</strong> { props.user.email } <Link to="/profileedit">edit</Link></p>
                <h3><Link to="/favorites">My Favorites</Link></h3>

            </div>

        </div>
        
    </div>) : <h4>Loading...</h4>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page.</h3>
            </div>
        );
    };
    
    return (
        <div>
            { props.user ? userData: errorDiv() }
        </div>
    );

};

export default Profile;