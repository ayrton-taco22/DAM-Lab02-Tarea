import React, {Component} from 'react';
import {
  StyleSheet,  
  Text, 
  View,
  TextInput, 
  Image,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textValue: '',
      count: 0,
    };
  }

  changeTextInput = text => {
    this.setState({textValue: text});
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.text}>
          <Text>INICIO DE SESION</Text>
        </View>

        <Image source={require('./img/logo4.png')}/>

        <View style={styles.text}>
          <Text>Usuario:</Text>
        </View>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.changeTextInput(text)}
          value={this.state.textValue}
          />
        <View style={styles.text}>
          <Text>Contraseña</Text>
        </View>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.changeTextInput(text)}
          value={this.state.textValue}
          />
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text>Iniciar Sesion</Text>
        </TouchableOpacity>
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            {this.state.count}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    alignItems: 'center',
    padding: 10,
  },

  button:{
    top:10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer:{
    alignItems: 'center',
    padding: 10,
  },
  countText:{
    color: '#FF00FF',
  },
});