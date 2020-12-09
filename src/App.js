import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/detail" component={Detail} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
