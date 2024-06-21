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
      <Student name="Spongebob" age={38}/>
      <Button/>
      <Food/>
      <Footer/>
    </>
  );
}

export default App
