// import React from "react";
// import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

// const screen = Dimensions.get("window");
// const buttonWidth = screen.width / 4;

// const styles = StyleSheet.create({
//     text: {
//       color: "#fff",
//       fontSize: 25
//     },
//     textSecondary: {
//       color: "#060606"
//     },
//     button: {
//       backgroundColor: "#333333",
//       flex: 1,
//       height: Math.floor(buttonWidth - 10),
//       alignItems: "center",
//       justifyContent: "center",
//       borderRadius: Math.floor(buttonWidth),
//       margin: 5
//     },
//     buttonDouble: {
//       width: screen.width / 2 - 10,
//       flex: 0,
//       alignItems: "flex-start",
//       paddingLeft: 40
//     },
//     buttonSecondary: {
//       backgroundColor: "#a6a6a6"
//     },
//     buttonAccent: {
//       backgroundColor: "#f09a36"
//     }
//   });

// export default ({ onPress : any, text, size, theme }) => {
//     const buttonStyles = [styles.button];
//     const textStyles = [styles.text];
    
//     if (size === "double") {
//         buttonStyles.push(styles.buttonDouble);
//     }
    
//     if (theme === "secondary") {
//         buttonStyles.push(styles.buttonSecondary);
//         textStyles.push(styles.textSecondary);
//     } else if (theme === "accent") {
//         buttonStyles.push(styles.buttonAccent);
//     }
    
//     return (
//         <TouchableOpacity onPress={onPress} style={buttonStyles}>
//       <Text style={textStyles}>{text}</Text>
//     </TouchableOpacity>
//   );
import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions, GestureResponderEvent, ViewStyle, TextStyle } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

// Definindo os tipos para as props
interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  size?: "single" | "double"; // Pode ser "single" ou "double"
  theme?: "primary" | "secondary" | "accent"; // Definindo os temas possíveis
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25,
  },
  textSecondary: {
    color: "#060606",
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "#f09a36",
  },
});

// O tipo correto para o TouchableOpacity pode ser um estilo de ViewStyle
const Button: React.FC<ButtonProps> = ({ onPress, text, size, theme }) => {
  const buttonStyles: ViewStyle[] = [styles.button]; // Definindo o tipo correto para buttonStyles
  const textStyles: TextStyle[] = [styles.text];   // Definindo o tipo correto para textStyles

  // Condicionalmente adicionando estilos conforme o tamanho
  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  // Alterando estilos conforme o tema
  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
