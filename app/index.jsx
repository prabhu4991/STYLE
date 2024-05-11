import {Button, Image, ScrollView, Text,View} from "react-native"
import images from "@/assets/images/ajitkumar.jpg";
import images1 from "@/assets/images/ajitkumar1.webp";
function App(){
 function callbeback(){
  console.log("she is my mine");
 } 
 function bye(){
  console.log("king is on fire");
 }
  return(
<ScrollView>
  <Text>
      king is back
  </Text>
  <Button 
  title="boy"
  onPress={function (){
    callbeback();
  }}
  />
  <Button 
  title="girl"
  onPress={function (){
    bye();
  }}
  />
  <Image
    source={{
      uri:"https://w0.peakpx.com/wallpaper/98/804/HD-wallpaper-thala-ajith-actor-billa-hero-kollywood-mankatha-tamil-ultimatestar.jpg"

    }}
    style={{width:100, height:200}}
  />
  <Image 
  source={images}
  style={{ width:100, height:200}}
  />
  <Image
  source={images1}
  style={{ width:100, height:200}}
  />
  <Image
  source={images1}
  style={{ width:100, height:200}}
  />
  <Image
  source={images1}
  style={{ width:100, height:200}}
  />
  <Image
  source={images1}
  style={{ width:100, height:200}}
  />
</ScrollView>
  );
}
export default App;