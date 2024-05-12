import {Button, Image, ScrollView, Text,View} from "react-native"
import images from "@/assets/images/ajitkumar.jpg";
import images1 from "@/assets/images/ajitkumar1.webp";
import images2 from "@/assets/images/THALAPATHYVIJAY.jpeg";
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
    style={{width:400, height:600}}
  />
  <Image 
  source={images}
  style={{ width:900, height:600}}
  />
  <Image
  source={images1}
  style={{ width:400, height:600}}
  />
  <Image
  source={images1}
  style={{ width:400, height:600}}
  />
  <Image
  source={images1}
  style={{ width:400, height:600}}
  />
  <Image
  source={images1}
  style={{ width:400, height:600}}
  />
  <Image
  source=
  {
    images2
  }
style={{ width:400, height:600}}
/>
</ScrollView>
  );
}
export default App;



// chnages from system 1

// change 2