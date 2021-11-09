import "./App.scss";
import { Provider } from "react-redux";

import { store } from "./store";
import { ratesDataAPI } from "./api/api";

import Header from "./components/Header/Header";
import HeroTitle from "./components/HeroTitle/HeroTitle";
import Form from "./components/Form/Form";
import Display from "./components/Display/Display";
import ButtonSubmit from "./components/ButtonSubmit/ButtonSubmit";
import ContentColumn from "./components/ContentColumn/ContentColumn";

function App() {
  ratesDataAPI.getRates();
  return (
    <div className="App">
      <Provider store={store}>
        <Header />

        <div className="content-container">
          <HeroTitle />
          <div className="content-columns-container">
            <ContentColumn>
              <Form />
            </ContentColumn>

            <ContentColumn>
              <Display />
              <ButtonSubmit />
            </ContentColumn>
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;
