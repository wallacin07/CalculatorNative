import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity, Image } from "react-native";

import Row from "../../components/Row";
import Button from "../../components/Button";
import calculator from "../../util/calculator";


interface CalculatorState {
  currentValue: string;
  operator: string | null;
  previousState: string | null;
  scientificCalculator: boolean
}

const initialState: CalculatorState = {
  currentValue : '0',
  operator: null,
  previousState:null,
  scientificCalculator: false
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end"
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 60,
  },
  img: {
    width: 40,
    height:40
  }
});



export default class App extends React.Component<{}, CalculatorState> {
  state = initialState;


  handleTap = (type: string, value?: string | number) => {
    if (type === "operator" && ["x^3", "√", "π"].includes(value as string)) {
      this.setState((state) => calculator(type, value, state));
    } else {
      this.setState((state) => calculator(type, value, state));
    }
  };

  handleCalculator = () => {
    this.setState((prevState) => ({
      scientificCalculator: !prevState.scientificCalculator,
    }),() =>{
      console.log(this.state.scientificCalculator)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>

          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.handleTap("clear")}
            />
            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.handleTap("posneg")}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() => this.handleTap("percentage")}
            />
            <Button
              text="/"
              theme="accent"
              onPress={() => this.handleTap("operator", "/")}
            />
            <Button
              text="x^y"
              theme="accent"
              onPress={() => this.handleTap("operator", "x^y")}
            />
          </Row>

          <Row>
            <Button text="7" onPress={() => this.handleTap("number", 7)} />
            <Button text="8" onPress={() => this.handleTap("number", 8)} />
            <Button text="9" onPress={() => this.handleTap("number", 9)} />
            <Button
              text="x"
              theme="accent"
              onPress={() => this.handleTap("operator", "*")}
            />
            <Button
              text="x^3"
              theme="accent"
              onPress={() => this.handleTap("operator", "x^3")}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.handleTap("number", 4)} />
            <Button text="5" onPress={() => this.handleTap("number", 5)} />
            <Button text="6" onPress={() => this.handleTap("number", 6)} />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.handleTap("operator", "-")}
            />
            <Button
              text="√"
              theme="accent"
              onPress={() => this.handleTap("operator", "√")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.handleTap("number", 1)} />
            <Button text="2" onPress={() => this.handleTap("number", 2)} />
            <Button text="3" onPress={() => this.handleTap("number", 3)} />
            <Button
              text="+"
              theme="accent"
              onPress={() => this.handleTap("operator", "+")}
            />
            <Button
              text="π"
              theme="accent"
              onPress={() => this.handleTap("operator", "π")}
            />
          </Row>

          <Row>

            <TouchableOpacity style={styles.button}>
                <Image source={require("../../assets/images/calculadora.svg")} style={styles.img}></Image>
            </TouchableOpacity>
            <Button
              text="0"
              size="single"
              onPress={() => this.handleTap("number", 0)}
            />
            <Button text="." onPress={() => this.handleTap("number", ".")} />
            <Button
              text="="
              theme="accent"
              onPress={() => this.handleTap("equal")}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}
