import PropTypes from "prop-types";

function List(props) {

   const itemList = props.items;
    const category = props.category;
  
    const listItems = itemList.map(item  => <li key={item.id}>{item.name}: &nbsp;<b>{item.cost}</b></li>);
    return (
        <>
        <h3 className="list-category">{category}</h3>
        <ul className="list-items">{listItems}</ul>
        </>
    );
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(
        {id: PropTypes.number,
        name: PropTypes.string,
        cost: PropTypes.number,
        })),
}

List.defaultProps = {
    category: "Category",
    items: [],

}
export default List





  //fruits.sort((a, b) => a.name.localeCompare(b.name)); //alphabetical
    // //reverse alphabetical = fruits.sort((a, b) => b.name.localeCompare(a.name));  
    // fruits.sort((a, b) => a.cost -b.cost); 


    // const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.cost}</b></li>);
    // return (<ul>{listItems}</ul>);

