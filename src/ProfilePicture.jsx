
function ProfilePicture() {

    const imageUrl = "./src/assets/Jiminy Cricket stargazing 2.jpg";
    const handleClick = () => console.log("oop");
    return (<img onClick={handleClick} src={imageUrl}></img>);
}

export default ProfilePicture