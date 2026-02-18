import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style= {style.container }>
      <View>
      <Text style ={ style.mainTitlle} >SenaiFlix</Text>
      <Text style = {style.welcomeText }> O melhor app para os amantes de filmes e series</Text>
    </View>
    </SafeAreaView>
    
  );
}

const style = StyleSheet.create({
  container: {
    paddingTop:  10,
    paddingHorizontal: 15,
    backgroundColor: "#000",
    flex: 1,
     },
    mainTitlle:{
    color: "#fff",
    fontSize:20,
    fontWeight: "bold",
    marginBottom: 5
  },
  welcomeText:{
    color:"#fff",
    fontSize: 14,
    opacity:0.8, 
    marginBottom:5
  },
  movieImagem:{
    width: 120,
    height: 180,
    borderRadius: 8
},



})
