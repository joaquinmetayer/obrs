import { Component } from 'react'

const styles = {
  layout: {
    backgroundColor: '#fff',
    color: '#0A283E',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    width: '1200px',
  }
}
class Layout extends Component {
  render() {
    return (
      // dos divs, uno para centrar la pagina en general
      // y otro pinterior para que no se apliquen los estilos de la pagina en general como el centrado
      <div style={styles.layout}>
        <div style={styles.container}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout
