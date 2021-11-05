import "./App.scss";
import { Icon } from "@iconify/react";

function App() {
  return (
    <div className="App">
      <header>
        <Icon icon="ci:menu-duo" className="big-icon" />
      </header>

      <div className="content-container">
        <h1>Hourly Rate Calculator</h1>
        <h3>
          <q>Time is money</q> as Benjamin Franklin Said.
        </h3>
        <div className="content-columns-container">
          <div className="content-column">
            <div className="form-container">
              <form>
                <label>
                  Price:
                  <input type="text" value="20.5" />
                </label>
                <label>
                  Time:
                  <input type="text" value="160:47" />
                </label>
                <label>
                  Currency:
                  <input type="text" value="USD" />
                </label>
              </form>
            </div>
          </div>

          <div className="content-column">
            <div className="display">
              <h2 className="display-title">Total price</h2>
              <p className="display-sum">3296.06$</p>
              <div className="display-currencies-container">
                <div className="display-sep-currency">
                  <div className="display-sep-currency-type">EUR</div>
                  <div className="display-sep-currency-sum">2 841,84</div>
                </div>

                <div className="display-sep-currency">
                  <div className="display-sep-currency-type">UAH</div>
                  <div className="display-sep-currency-sum">86 695,59</div>
                </div>

                <div className="display-sep-currency">
                  <div className="display-sep-currency-type">RUB</div>
                  <div className="display-sep-currency-sum">236 467,44</div>
                </div>
              </div>
            </div>
            <div className="calculate-btn-container">
              <button className="calculate-btn">RESULT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
