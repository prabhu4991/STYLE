import { View,Text } from "react-native";

function App() {

  return (
    <View
    style={{
      width: 300,
      height: 300,
      backgroundColor:"red",
      borderWidth: 10,
      borderColor: "solid",
      borderRadius: 40,
      margin: 20,
      padding: 10,
      
    }}
    >
      <Text
      style={{
        color:"green",
        fontSize: 40,
        frontWeight: 400,
        textAlign:"center",
        TextDecorationLine: "center",
        letterSpacing: 1,
      }}
      >
        she is my mine
      </Text>
    </View>
  );
}
export default App;
