import React from "react";
import { View, ViewStyle } from "react-native";

interface RowProps {
  children: React.ReactNode; 
}

const Row: React.FC<RowProps> = ({ children }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {children}
    </View>
  );
};

export default Row;
