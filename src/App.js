import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import NavigationMenu from "./components/NavigationMenu";
import Content from "./components/Content"

function App() {

  return (
    <>
      <Header />
      <NavigationMenu />
      <div className="main">
        <Content text="Content 1" number={5} active={true} border={true} />
        <MainContent />
        <Content text="Content 2" number={10} active={false} />
      </div>
      <Footer />
    </>
  );
}

export default App;
