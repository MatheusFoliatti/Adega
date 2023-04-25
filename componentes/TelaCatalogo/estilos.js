import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  containerScroll: {
    
  },
  titulo: {
   fontWeight: 'bold',
   fontSize: 25,
   padding: 10,
   marginLeft: 10
  },
  subtitulo: {
    padding: 10,
    marginLeft: 10,
    fontSize: 15
  },
  cardVinho: {
    padding: 10,
    border: "solid 1px #ab887c",
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#ab887c"
  },
  vinhoImg: {
    width: "18vw",
    height: "30vw",
    marginTop: 15
  },
  cardBoxDescricao: {
    flex: 1
  },
  cardTitulo: {
    textAlign:'center',
    marginTop: -100,
    
    marginLeft: -10,
    color: "#fff",
    fontWeight: 'bold'
  },
  cardTitulo2: {
    textAlign:'center',
    marginTop: -100,
    
    marginLeft: -10,
    color: "#fff",
    fontWeight: 'bold'
  },
  cardDescricao: {
    textAlign:'center',
    marginLeft: 90,
    marginRight: 10,
    textAlign: 'justify',
    color: "#fff",
    marginBottom: 20,
  },
});

export default estilos;