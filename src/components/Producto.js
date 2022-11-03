import { Component } from "react";
import Button from './Button'

const styles = {
  producto: {
    border: "solid 1px #eee",
    boxShadow: "0 5px 5px rgb(0, 0, 0, 0.1)",
    width: "250px",
    padding: "10px",
    borderRadius: "10px",
  },
  img: {
    width: "100%",
    borderRadius: "5px",
  },
};

class Producto extends Component {
  render() {
    const { producto, agregarAlCarro } = this.props;
    console.log(this.props);
    return (
      <div style={styles.producto}>
        <img style={styles.img} alt={producto.name} src={producto.img}></img>
        <h3>{producto.name}</h3>
        <p>{producto.price}</p>
        <Button onClick={() => agregarAlCarro(producto)}>Agregar al carro</Button>
      </div>
    );
  }
}
export default Producto;
