import { View } from "react-native";

function App() {

  return (
    <View style={{
      width: 300,
      height: 300,
      backgroundColor: "red",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      gap: 4,
      padding: 10,
    }}
    >
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: "green",
          borderWidth: 2,
        }}
      >
      </View>
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: "orange",
          borderWidth: 2,
        }}
      >
      </View>
      <View
    style={{
     width: 60,
     height: 60,
     backgroundColor: "yellow", 
     borderWidth: 2,
    }}
    >
   </View>  
   <View
    style={{
     width: 60,
     height: 60,
     backgroundColor: "brown",
     borderWidth: 2,
    }}
    >
   </View>  
   <View
    style={{
     width: 60,
     height: 60,
     backgroundColor: "pink", 
    }}
    >
   </View> 

 <View
 style={{
  width:60,
  height:60,
  backgroundColor: "black",
 }}
 >
 </View>

    </View>
  );
}
export default App;
