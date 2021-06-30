import React, {Component} from 'react';
import {View, TextInput, Button, Text, SafeAreaView, TouchableOpacity} from 'react-native';

import * as globalStyle from "./src/globalStyle";


class Calculadora extends Component {
      render (){
      return (
            <SafeAreaView style={globalStyle.styles.conteiner}>
                  <View style={globalStyle.styles.display}>

                        <TextInput  style={globalStyle.styles.txtOp}
                              value={this.props.calculo}/>
                        <TextInput style={globalStyle.styles.txtResult}
                              value={this.props.resposta}/>
                  </View>
                  <View >{this.props.children}</View>
            </SafeAreaView>
    )
      }
      }  
      

class App extends Component {

    state = {calculo:"", resposta:0}
    operacao(){
        var c = this.state.calculo
        console.log(eval(c))
        this.setState({resposta:eval(c)})
        
    }

    expressao(valor){
        var a = this.state.calculo+valor
        this.setState({calculo:a})
    }

    apagar(){
      this.setState({calculo:""})
      this.setState({resposta:0})
      
  }
    
    render(){ 
        return (
            <SafeAreaView style={globalStyle.styles.conteiner}>
                  <Calculadora calculo={this.state.calculo} resposta={this.state.resposta.toString()}>

                  <View style={globalStyle.styles.row}>
                        <TouchableOpacity style={globalStyle.styles.buttonStilo} onPress={this.expressao.bind(this, "1")}>
                              <Text>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={globalStyle.styles.buttonStilo} onPress={this.expressao.bind(this, "2")}>
                              <Text>2</Text>
                              </TouchableOpacity>
                        <TouchableOpacity style={globalStyle.styles.buttonStilo} onPress={this.expressao.bind(this, "3")}>
                              <Text>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={globalStyle.styles.buttonStilo} onPress={this.expressao.bind(this, "4")}>
                              <Text>4</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={globalStyle.styles.buttonStilo} onPress={this.expressao.bind(this, "5")}>
                              <Text>5</Text>
                        </TouchableOpacity>
           
                  </View>

                  <View style={globalStyle.styles.row}>
                        <TouchableOpacity style={globalStyle.styles.buttonStilo} onPress={this.expressao.bind(this, "6")}>
                              <Text>6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={globalStyle.styles.buttonStilo} onPress={this.expressao.bind(this, "7")}>
                              <Text>7</Text>
                              </TouchableOpacity>
                        <TouchableOpacity style={globalStyle.styles.buttonStilo} onPress={this.expressao.bind(this, "8")}>
                              <Text>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={globalStyle.styles.buttonStilo} onPress={this.expressao.bind(this, "9")}>
                              <Text>9</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={globalStyle.styles.buttonStilo} onPress={this.expressao.bind(this, "0")}>
                              <Text>0</Text>
                        </TouchableOpacity>
                        
                  </View>

                  <View style={globalStyle.styles.row}>
                    <TouchableOpacity style={globalStyle.styles.buttonStilo} onPress={this.apagar.bind(this)}>
                              <Text>C</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={globalStyle.styles.buttonStilo} onPress={this.expressao.bind(this, ".")}>
                              <Text>.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={globalStyle.styles.buttonStilo} onPress={this.expressao.bind(this, "(")}>
                              <Text>(</Text>
                              </TouchableOpacity>
                        <TouchableOpacity style={globalStyle.styles.buttonStilo} onPress={this.expressao.bind(this, ")")}>
                              <Text>)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={globalStyle.styles.buttonStilo} onPress={this.expressao.bind(this, "+")}>
                              <Text>+</Text>
                              </TouchableOpacity>
                  </View>  

                  <View style={globalStyle.styles.row}>
                        <TouchableOpacity style={globalStyle.styles.buttonStilo} onPress={this.expressao.bind(this, "-")}>
                              <Text>-</Text>
                              </TouchableOpacity>
                        <TouchableOpacity style={globalStyle.styles.buttonStilo} onPress={this.expressao.bind(this, "*")}>
                              <Text>*</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={globalStyle.styles.buttonStilo} onPress={this.expressao.bind(this, "/")}>
                              <Text>/</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={globalStyle.styles.buttonIgualdade} onPress={this.operacao.bind(this)}>
                              <Text>=</Text>
                        </TouchableOpacity>
                  </View>
                  </Calculadora>

    
    </SafeAreaView>
    )
    }
}
export default App;