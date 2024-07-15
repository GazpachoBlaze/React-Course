function List() {

    const fruits = [
        {id: 1, name: "Mango", cost: 3.00},
        {id: 2, name: "Peach", cost: 1.50},
        {id: 3, name: "Pineapple", cost: 6.00},
        {id: 4, name: "Grape", cost: 4.00},
    ];

    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}</li>);
    return (<ul>{listItems}</ul>);
}

export default List