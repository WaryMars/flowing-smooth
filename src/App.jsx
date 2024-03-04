import { Home, Shop, Footer } from "./sections";
import Navbar from "./components/Navbar";
// import { Home, Shop, Footer } from "./components";


const App = () => (
  <main>
    <Navbar />
    <section>
      <Home />
    </section>

    {/* <section>
      <Shop />
    </section> */}

    {/* <section>
      <Footer />
    </section> */}
  </main>
);

export default App;
