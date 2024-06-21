function Food() {

    const styles = {
        color: "green",

    }

    const food1 = "Orange";
    const food2 = "Mango";
    return (
        <ul style={styles}>
            <li>Apple</li>
            <li>{food2}</li>
            <li>{food1.toUpperCase()}</li>
        </ul>
    );
}


export default Food