import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import List from './List.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'

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
      <Button/>
      <Food/>
      {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
      {meats.length > 0 ? <List items={meats} category="Meats"/> : null }
      <Footer/>
    </>
  );
}

export default App
