import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./ui/Footer";
import { useState } from "react";
import LandingPage from "./LandingPage";
import Services from "./Services";
import CustomSoftware from "./CustomSoftware";
import MobileApps from "./MobileApps";
import Website from "./Website";


function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>

      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route exact path="/" render={(props) => <LandingPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path="/services" render={(props) => (<Services {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />)} />
          <Route exact path="/customsoftware" render={(props) => (<CustomSoftware {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />)} />
          <Route exact path="/mobileapp" render={(props) => (<MobileApps {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />)} />
          <Route exact path="/website" render={(props) => (<Website {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />)} />
          <Route exact path="/about" component={() => <div>about</div>} />
          <Route exact path="/revolution" component={() => <div>The Revolution</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
