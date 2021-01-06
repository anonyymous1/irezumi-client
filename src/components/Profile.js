import { Link } from 'react-router-dom'

const Profile = (props) => {

    console.log(props.user.id);
    const userData = props.user ?
    (<div className="row">
        <h1 className="title">Profile</h1>
        <div className="hr"></div>
        <div>
            <div className="user-info">
                <div className="imageHolder">
                    <img className="profile-img" src={props.user.imageURL} alt={props.user.name}/>
                </div>
                <div>
                    <p><strong>User ID:</strong> { props.user.id.toUpperCase() } </p>
                    <p><strong>Name:</strong> { props.user.name } </p>
                    <p><strong>Email:</strong> { props.user.email }</p>
                    <Link to="/profileedit">EDIT PROFILE</Link>
                </div>
            </div>
                <h3><Link to="/favorites">My Favorites</Link></h3>
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