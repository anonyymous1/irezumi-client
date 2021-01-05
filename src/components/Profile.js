import { Link } from 'react-router-dom'

const Profile = (props) => {

    console.log(props.user.imageURL);
    const userData = props.user ?
    (<div>
        <h1>Profile</h1>
        <p><strong>Name:</strong> { props.user.name } </p>
        <p><strong>Email:</strong> { props.user.email } <Link to="/profileedit">edit</Link></p>
        <p><strong>ID:</strong> { props.user.id } </p>
        <img src={props.user.imageURL} alt={props.user.name}/>
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