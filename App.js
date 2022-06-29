import React from 'react';
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      alcool: '',
      gasolina: ''

    }
  }
  render() {
    return (
      <View style={styles.container}>

      <ScrollView>


        <View style={styles.topArea}>
          <Image style={styles.image} source={require('./src/img/logo.png')} />

          <Text style={styles.mainText}>
            Qual a melhor opção?
          </Text>
        </View>

        <View style={styles.bottomArea}>

          <Text style={styles.text}> 
            Álcool (preço por litro):
          </Text>
          <TextInput style={styles.input} />

          <Text style={styles.text}> 
            Gasolina (preço por litro)
          </Text>
          <TextInput style={styles.input} />

          <TouchableOpacity style={styles.buttonArea}>
            <Text style={styles.buttonText}>
              Calcular
            </Text>
          </TouchableOpacity>

        </View>


      </ScrollView>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#333333',
  },

  topArea: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50
  },

  mainText: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold'
  },

  image: {
    marginVertical: 20
  },

  bottomArea: {
    paddingBottom: 20
  },

  text: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold'
  },

  input: {
    padding: 8,
    marginVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 5
  },

  buttonArea: {
    alignItems: 'center',
    backgroundColor: '#EF4130',
    borderRadius: 5
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    padding: 10,
  }
});

export default App;
