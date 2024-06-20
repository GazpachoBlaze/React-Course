import profilePic from "./assets/Jiminy Cricket stargazing 2.jpg"

function Card() {
    return (
        <div className="card">
            <img src={profilePic} alt="profile picture"></img>
            <h2>WEBSITE HEADER</h2>
            <p>This is a description and ya</p>
        </div>
    );
}

export default Card