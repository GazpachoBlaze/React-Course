import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import List from './List.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'

function App() {

 

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
      <Button/>
      <Food/>
      <List/>
      <Footer/>
    </>
  );
}

export default App
