import React from 'react';
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Button,
  Modal
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      alcoolInput: '',
      gasolinaInput: '',
      modalVisible: false,
      resultado: ''

    }

    this.calcular = this.calcular.bind(this)
    this.voltar = this.voltar.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  calcular() {
    if (this.state.alcoolInput === '' || this.state.gasolinaInput === '') {
      alert('Preencha todos os campos!')
    } else {
      this.setState({ modalVisible: true })

      this.setState({ resultado: this.state.alcoolInput / this.state.gasolinaInput })
    }
  }

  voltar() {
    this.setState({ modalVisible: false })

  }

  limpar() {
    this.textInputAlcool.clear()
    this.textInputGasolina.clear()

    this.setState({ alcoolInput: '' })
    this.setState({ gasolinaInput: '' })
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

          <View>

            <Text style={styles.text}>
              Álcool (preço por litro):
            </Text>
            <TextInput ref={input => { this.textInputAlcool = input }} style={styles.input} keyboardType={'numeric'} onChangeText={(alcool) => this.setState({ alcoolInput: alcool })} />

            <Text style={styles.text}>
              Gasolina (preço por litro)
            </Text>
            <TextInput ref={input => { this.textInputGasolina = input }} style={styles.input} keyboardType={'numeric'} onChangeText={(gasolina) => this.setState({ gasolinaInput: gasolina })} />

            <View style={styles.button}>
              <Button
                title='Calcular'
                color='#EF4130'
                onPress={this.calcular}
              />
            </View>

            <View style={styles.button}>
              <Button
                title='Limpar'
                color='#B22222'
                onPress={this.limpar}
              />
            </View>

            <Modal
              animationType='fade'
              transparent={true}
              visible={this.state.modalVisible}
            >
              <View style={styles.modalArea}>

                <Image style={styles.modalImage} source={require('./src/img/gas.png')} />

                <Text style={styles.textResult}>
                  Compensa usar Gasolina
                </Text>

                <Text style={styles.textPricesTitle}>
                  Com os preços:
                </Text>

                <Text style={styles.textPricesResult}>
                  Álcool: R$ {this.state.alcoolInput}
                </Text>

                <Text style={styles.textPricesResult}>
                  Gasolina: R$ {this.state.gasolinaInput}
                </Text>

                <View style={styles.modalButton}>
                  <Button
                    title='Calcular novamente'
                    color='#EF4130'
                    onPress={this.voltar}
                  />
                </View>
              </View>
            </Modal>
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

  text: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold'
  },

  button: {
    marginVertical: 5
  },

  input: {
    padding: 8,
    marginVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 5
  },

  // Modal

  modalArea: {
    flex: 1,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalImage: {
    marginBottom: 20
  },

  modalButton: {
    margin: 20,
  },

  textResult: {
    color: '#30EF5A',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 30
  },

  textPricesTitle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10
  },

  textPricesResult: {
    color: '#FFF',
    fontSize: 16,
    marginVertical: 1

  },

});

export default App;
