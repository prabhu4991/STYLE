import { Text, View } from "react-native";
import { Image } from "react-native";
function App() {
  return (
    <View>
      <Text>hello world</Text>

      <Image
        source={{
          uri: "https://t3.ftcdn.net/jpg/06/17/47/46/360_F_617474687_rqPZ5p5HxD9RZUajSDBYlffpq9PIs8oY.jpg",
        }}
        style={{ width: 400, height: 400 }}
      />
    </View>
  );
}
export default App;
