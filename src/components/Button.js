import { Component } from 'react'

const styles = {
  button: {
    backgroundColor: '#0A283E',
    color: '#fff',
    padding: '15px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
}
class Button extends Component {
  render() {
    return (
      // con el this.props le paso todas las propiedades de boton que tengo
      // como lo es la propiedad onclick que defini en producto
      <button style={styles.button} {...this.props} />
    )
  }
}

export default Button
