import './App.css';
import Header from './pages/header'
import Content from './pages/content';




function App() {


  return (
    <div className="container">
      <Header 
      logo = "HOME"
      one = "Products"
      two = "Services"
      three = "Contact"
      four = "Log in"/>
      <Content 
      title = "Instant collaborations for remote teams"
      text = "All in one for your remote team chats, collaboration and track projects"
      button = "Get early access"
      placeholder="Email"
      type="email"/>
    </div>
  );
}

export default App;
