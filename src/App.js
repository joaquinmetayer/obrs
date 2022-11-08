import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: './productos/tomate.jpeg' },
      { name: 'Arbejas', price: 2500, img: './productos/arbejas.jpeg' },
      { name: 'Lechuga', price: 500, img: './productos/lechuga.jpeg' },
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    // busco en el carro el producto si existe o no
    if (carro.find(x => x.name === producto.name)) {
      // cuando lo encuentre, si existe suma el valor + 1
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
      // si no existe muestro en el carro creandolo con newcarro
      return this.setState({ carro: newCarro })
    }
    // si no existe:
    // agrego el item al array carro
    return this.setState({
      // le agrego al objeto la cantidad
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length) {
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  render() {
    // traigo la variable "global" al render
    const { esCarroVisible } = this.state
    
    return (
      <div>
        <Navbar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos
            // le paso al componente lo que va a usar
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
