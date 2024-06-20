import profilePic from "./assets/Jiminy Cricket stargazing 2.jpg"

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">WEBSITE HEADER</h2>
            <p className="card-text">This is a description and ya</p>
        </div>
    );
}

export default Card