import NavBar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import Data from "./data"


function App() {

  const cardElements = Data.map(info => {
    return <Card
      key={info.id}
      info={info}
    />
  })
  return (
    <div className="app-container">
      <NavBar></NavBar>
      <Hero></Hero>
      <div className="cards-list">
        {cardElements}
        {cardElements}
        {cardElements}
      </div>
    </div>
  );
}

export default App;
