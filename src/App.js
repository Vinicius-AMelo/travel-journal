import './App.css';
import Cards from './components/cards';
import Nav from './components/nav'
import CardsData from './components/cardsData'


const data = CardsData.map(item => {
  return <Cards key={item.id} {...item} />
})

export default function App() {
  return (
    <div className="App">
      <Nav />
      <div className='cards--app'>
        {data}
      </div>
    </div>
  );
}


