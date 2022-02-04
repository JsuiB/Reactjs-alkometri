import { useState } from "react";
import "./App.css";

function App() {
  const [paino, setPaino] = useState(0);
  const [pullot, setPullot] = useState(0);
  const [aika, setAika] = useState(0);
  const [sukupuoli, setSukupuoli] = useState("mies");
  const [tulos, setTulos] = useState(0);

  const litra = Number(pullot) * 0.33;
  const gramma = Number(litra) * 8 * 4.5;
  const poltto = Number(paino) / 10;
  const gramma2 = gramma - poltto * aika;


   const laske = () => {
     
     let määrä = 0;
     if (sukupuoli === "mies") {
       määrä = gramma2 / (paino * 0.7);
     } else {
       määrä = gramma2 / (paino * 0.6);
     }
     setTulos(määrä);
   }


  return (
    <form>
      <h3>Laske alkoholin määrä veressä </h3>
      <div>
        <label>Paino </label>
        <input
          type="number"
          value={paino}
          onChange={(e) => setPaino(e.target.value)}
        />
      </div>
      <div>
        <label>Karhu pullojen määrä </label>
        <select onChange={(e) => setPullot(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">kontti/koppa/kona</option>
        </select>
      </div>
      <div>
        <label>Aika </label>
        <select onChange={(e) => setAika(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
        </select>
      </div>
      <div>
        <label>Sukupuoli </label>
        <label>
          <input
            type="radio"
            name="sukupuoli"
            value="mies"
            defaultChecked
            onChange={(e) => setSukupuoli(e.target.value)}
          />
          Mies
        </label>
        <label>
          <input
            type="radio"
            name="sukupuoli"
            value="nainen"
            onChange={(e) => setSukupuoli(e.target.value)}
          />
          Nainen
        </label>
      </div>
      <div>
        <label>Määrä: </label>
        <output>{tulos.toFixed(2)}</output>
      </div>
      <button type="button" onClick={laske}>
        Laske
      </button>
    </form>
  );
}

export default App;
