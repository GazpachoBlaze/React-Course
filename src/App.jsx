import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import List from './List.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Button2 from './Button/Button2.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import ChangeEvent from './ChangeEvent.jsx'
import ColorPicker from './ColorPicker.jsx'
import Car from './Car.jsx'
import UpdatingArray from './UpdatingArray.jsx'
import UpdatingStates from './UpdatingStates.jsx'


function App() {

  const fruits = [
    {id: 1, name: "Mango", cost: "$3.00"},
    {id: 2, name: "Peach", cost: "$1.50"},
    {id: 3, name: "Pineapple", cost: "$6.00"},
    {id: 4, name: "Grape", cost: "$4.00"},
  ];

  const meats = [
    {id: 5, name: "Deer", cost: "$10.00"},
    {id: 6, name: "Beef", cost: "$8.00"},
    {id: 7, name: "Pork", cost: "$6.00"},
    {id: 8, name: "Fish", cost: "$20.00"},
  ];

// fruits.sort((a, b) => a.name.localeCompare(b.name)); //alphabetical
    // //reverse alphabetical = fruits.sort((a, b) => b.name.localeCompare(a.name));  
    // fruits.sort((a, b) => a.cost -b.cost); 


    // const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.cost}</b></li>);
    // return (<ul>{listItems}</ul>);

  return (
    
    <>
    
      <Header/>
      <Card/>
      <UserGreeting isLoggedIn = {true} username = "Gazpacho"/>
      <Student name="Spongebob" age={38} isStudent={true}/>
      <Student name="Patrick" age={40} isStudent={false}/>
      <Student name="Squidward" age={47} isStudent={false}/>
      <Student name="Sandy" age={43} isStudent={true}/>
      <Student/>
      <ProfilePicture/>
      <MyComponent/>
      <Car/>
      <Counter/>
      <Button/>
      <Button2/>
      <ChangeEvent/>
      <Food/>
      {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
      {meats.length > 0 ? <List items={meats} category="Meats"/> : null }
      <List/>
      <ColorPicker/>
      <UpdatingArray/>
      <UpdatingStates/>
      <Footer/>
    </>
  );
}

export default App
