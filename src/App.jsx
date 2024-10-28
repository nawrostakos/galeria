import './App.css';
import z1 from './img/gruszka.jpg';
import z2 from './img/morela.jpg';
import z3 from './img/papaja.jpg';
import z4 from './img/marchew.jpg';
import MovieList from './MovieList';

const produkty = [
  {nr: 1, nazwa: "gruszka", opis: "Klaps", ilosc: 20, cena: 2.56, zdjecie: z1},
  {nr: 2, nazwa: "morela", opis: "Klaps", ilosc: 15, cena: 3.21, zdjecie: z2},
  {nr: 3, nazwa: "arbuz", opis: "Klaps", ilosc: 11, cena: 12.06, zdjecie: z3},
  {nr: 4, nazwa: "marchew", opis: "Klaps", ilosc: 5, cena: 9.15, zdjecie: z4}
]

function App() {
  return (
    <div className="App">
      <header>
        <h1>Internetowy sklep z eko-warzywami</h1>
        <ol>
          <li>warzywa</li>
          <li>owoce</li>
          <li><a href="">soki</a></li>
        </ol>
      </header>
      <main>
        <div className="container">
            {produkty.map((p) => (<MovieList warzywo={p}/>))}
        </div>

      </main>
    </div>
  );
}

export default App;
