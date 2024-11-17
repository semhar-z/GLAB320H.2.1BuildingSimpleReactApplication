import Footer from './Footer.js';
import Content from './Content.js';
import Header from './Header.js';
import "./style.css";

function App() {
  return (
    <>
    <body>
      <Header/>
      <Content color="blue" text="This is my first React Application!" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer/>
    </body>
    </>
  );
}

export default App;