import { Component } from "react";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Title from './components/Title';
import Navbar from "./components/Navbar";


class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: "/productos/tomate.jpeg" },
      { name: "Arbejas", price: 2500, img: "/productos/arbejas.jpeg" },
      { name: "Lechuga", price: 500, img: "/productos/lechuga.jpeg" },
    ],
  };
  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={() => console.log("No hace nada")}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;