import { Component } from 'react'
import Producto from './Producto'

const styles = {
  productos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
}

class Productos extends Component {
  render() {
    // traigo de las propiedades que le pase por app.js lo que voy a utilizar
    const { productos, agregarAlCarro } = this.props

    return (
      <div style={styles.productos}>
        {productos.map(producto =>
          <Producto
            agregarAlCarro={agregarAlCarro}
            key={producto.name}
            producto={producto}
          />)}
      </div>
    )
  }
}

export default Productos