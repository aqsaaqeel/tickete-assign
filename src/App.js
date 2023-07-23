import { Navbar } from "./components/navbar/Navbar";
import "./App.css";
import { Card } from "./components"
// import { Card } from "./components/card/Card";
import { TicketCard, TicketDetails, FaqSection, FaqBox, BoxSection, Footer } from "./components";
import { FullLineComp } from "./components/FullLineComp";
import { LightLineComp } from "./components/LightLineComp";
import {VerticalLineComp} from "./components/VerticalLineComp";
function App() {
  return (
    <div className="App">
      <div className="app-body">
        <Navbar />
        <h1 className="typography main-heading">Confirm and Pay</h1>
        <div className="main-container">
          <section className="ticket-section">
            <TicketDetails />
          </section>
          <VerticalLineComp />
          <section className="details-section">
            <Card />
            <LightLineComp />
            <TicketCard />
          </section>
        </div>
        <FullLineComp />
        <div className="secondary-container">
          <section className="faqs">
            <FaqSection />
          </section>
          <FaqBox />
        </div>

        <FullLineComp />
        <BoxSection />
      </div>

        <Footer />
    </div>
  );
}

export default App;
