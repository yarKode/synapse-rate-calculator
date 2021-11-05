import "./App.scss";
import { Icon } from "@iconify/react";

import Header from "./components/Header/Header";
import HeroTitle from "./components/HeroTitle/HeroTitle";
import Form from "./components/Form/Form";
import Display from "./components/Display/Display";
import ButtonSubmit from "./components/ButtonSubmit/ButtonSubmit";
import ContentColumn from "./components/ContentColumn/ContentColumn";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
