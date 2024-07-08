import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx';
import Button from './Button/Button.jsx';
import Student from './Student.jsx';

function App() {
  return (
    <>
      <Header/>
      <Card/>
      <Student name="Spongebob" age={38} isStudent={true}/>
      <Student name="Patrick" age={40} isStudent={false}/>
      <Student name="Squidward" age={47} isStudent={false}/>
      <Student name="Sandy" age={43} isStudent={true}/>
      <Student/>
      <Button/>
      <Food/>
      <Footer/>
    </>
  );
}

export default App
