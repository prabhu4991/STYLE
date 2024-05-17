import { View,Text,Image} from "react-native";


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
  <View>
<Image 
source={{ 
  uri:"https://c4.wallpaperflare.com/wallpaper/848/223/819/nature-jpg-format-download-1920x1200-wallpaper-thumb.jpg"
}}
style={{ width:400, height:300}}
/>

  </View>
}
export default App;