import React from 'react';
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Button
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      alcoolInput: '',
      gasolinaInput: '',

    }

    this.calcular = this.calcular.bind(this)
  }

  calcular() {
    if (this.state.alcoolInput === '' || this.state.gasolinaInput === '') {
      alert('Preencha todos os campos!')
    } else {
      alert('Alcool: ' + this.state.alcoolInput + '\nGasolina: ' + this.state.gasolinaInput)
    }
  }
  render() {
    return (
      <View style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false}>

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
            <TextInput style={styles.input} keyboardType={'default'} onChangeText={(alcool) => this.setState({ alcoolInput: alcool })} />

            <Text style={styles.text}>
              Gasolina (preço por litro)
            </Text>
            <TextInput style={styles.input} keyboardType={'numeric'} onChangeText={(gasolina) => this.setState({ gasolinaInput: gasolina })} />

            <Button
              title='Calcular'
              color='#EF4130'
              onPress={this.calcular}
            />

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
    paddingVertical: 50
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
});

export default App;
