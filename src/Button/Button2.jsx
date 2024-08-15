import wob from "./Button2.module.css"

function Button2() {

    let count = 0;

    const handleClick = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} time(s)`);
        } else {
            console.log(`${name} stop clicking me`);
        }
    };
    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    return (<button2 className={wob.button2} onClick={() => handleClick("bruh")}>Click this</button2>);
}
// return (<button2 className={wob.button2} onClick={() => handleClick("bruh")}>Click this</button2>);

// (<ButtonClick onClick={handleClick2("bruh")}>Click this</ButtonClick>);

export default Button2