import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
 

const bannerData = [
  {
    id: 1,
    title:"Avatar",
    image:"https://www.geekzilla.com.br/wp-content/uploads/2025/04/hero-avatar-960x540.jpg"
  },
  {
    id: 2,
    title: "Vingadores",
    image: "https://hqrock.com.br/wp-content/uploads/2011/12/poster-december-02.jpg"
  },
  {
    id: 3,
    title: "Thor: Amor e Trovão",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4iqHTAkwAH7zAHdw2T8va8QK8rMEVvEeeg&s"
  }
]
const filmesEmAlta = [
  {
    id: 1,
    title: "Interstellar",
    image: "https://m.media-amazon.com/images/I/91obuWzA3XL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 2,
    title: "Five Nights At's Freddy's",
    image: "https://ingresso-a.akamaihd.net/prd/img/movie/five-nights-at-freddys-2/3d32e64a-c91b-4b19-a986-d4fd9374e71a.webp%22%22"
  },
  {
    id: 3,
    title: "Invocação do Mal 2",
    image: "https://br.web.img3.acsta.net/pictures/16/04/18/20/43/025084.jpg"
  },
  {
    id: 4,
    title: "Dark",
    image: "https://br.web.img2.acsta.net/r_1280_720/pictures/17/11/01/13/35/2780331.jpg"
  }
]
 
const series = [
  {
    id: 1,
    title: "Stranger Things",
    image: "https://www.europanet.com.br/superposter/images/vejapordentro/107063/107063.jpg"
  },
  {
    id: 2,
    title: "Arcane",
    image: "https://pbs.twimg.com/media/GUmsqKmWsAAxZnR.jpg"
  },
  {
    id: 3,
    title: "It: Bem Vindos à Derry",
    image: "https://http2.mlstatic.com/D_NQ_NP_729621-MLB98881040183_112025-O.webp"
  },
  {
    id: 4,
    title: "Olympo",
    image: "https://images.justwatch.com/poster/330517928/s718/olympo.jpg"
  }
]
 
const filmes = [
  {
    id: 1,
    title: "Annabelle",
    image: "https://br.web.img2.acsta.net/pictures/14/08/11/21/32/336680.jpg"
  },
  {
    id: 2,
    title: "A Freira",
    image: "https://br.web.img3.acsta.net/pictures/18/07/18/21/53/1348208.jpg"
  },
  {
    id: 3,
    title: "Minecraft: O Filme",
    image: "https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-04086-5340d3c734b9f88f7a17429947570553-640-0.webp%22%22"
  },
  {
    id: 4,
    title: "Harry Potter e a Pedra Filosofal",
    image: "https://img.elo7.com.br/product/zoom/2657A44/big-poster-harry-potter-e-a-pedra-filosofal-lo03-90x60-cm-poster.jpg%22%22"
  }
]
 const {width} = Dimensions.get("window")
export default function Index() {
  return (
 
    <SafeAreaView style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
 -
        <View>
          <View style={style.senaiFlix}>
            <Text style={style.mainTitle}>SENAI</Text>
            <Text style={style.mainTitle2}>FLIX</Text>
          </View>
          <Text style={style.welcomeText}>Bem vindo ao seu catálogo de filmes e séries.</Text>
        </View>
        
        <View style={style.section}>
          <FlatList
          data={bannerData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={(({item}) => (
          <View style={style.bannerContainer}>
              <View style={style.bannerItem}>
                <Image style={style.bannerImagem} source={{uri: item.image}}></Image>
                <Text style ={style.bannerTitle} >{item.title}</Text>

                <TouchableOpacity style={style.bannerButton}>
                  <Text style={style.bannerButtonText}>Assistir</Text>
                </TouchableOpacity>

              </View>
            </View>
          ))}
          />

        </View>

        <View style={style.section}>
          <Text style={style.sectionTitle}>Em Alta</Text>
 
          <FlatList
            contentContainerStyle={style.movieList}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filmesEmAlta}
            renderItem={(({ item }) => (
 
              <View style={style.movieItem}>
                <Image style={style.movieImage} source={{ uri: item.image }} />
                <Text style={style.movieTitle}>{item.title}</Text>
              </View>
 
            ))}>
 
          </FlatList>
        </View>
 
        <View style={style.section}>
          <Text style={style.sectionTitle}>Séries</Text>
 
          <FlatList
            contentContainerStyle={style.movieList}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={series}
            renderItem={(({ item }) => (
 
              <View style={style.movieItem}>
                <Image style={style.movieImage} source={{ uri: item.image }} />
                <Text style={style.movieTitle}>{item.title}</Text>
              </View>
 
            ))}>
 
 
          </FlatList>
        </View>
 
        <View style={style.section}>
          <Text style={style.sectionTitle}>Filmes</Text>
 
          <FlatList
            contentContainerStyle={style.movieList}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filmes}
            renderItem={(({ item }) => (
 
              <View style={style.movieItem}>
                <Image style={style.movieImage} source={{ uri: item.image }} />
                <Text style={style.movieTitle}>{item.title}</Text>
              </View>
 
            ))}>
 
 
          </FlatList>
        </View>
 
      </ScrollView>
    </SafeAreaView>
  );
}
 
const style = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1, //Ocupa a tela inteira
    paddingHorizontal: 10
  },
  senaiFlix: {
    flexDirection: "row"
  },
  mainTitle: {
    color: "#C70000",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5
  },
  mainTitle2: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  welcomeText: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 20
  },
  movieImage: {
    width: 100,
    height: 160
  },
  movieTitle: {
    color: "#fff",
    marginTop: 5,
    fontSize: 14,
    fontWeight: 400,
    flexWrap: "wrap"
  },
  movieItem: {
    width: 100
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  movieList: {
    gap: 15
  },
  section: {
    marginBottom: 30
  },
  bannerImagem:{
  width: "100%",
  height: 200,
  resizeMode:"cover",
  borderRadius:8,
  },
  bannerTitle: {
    color:"#fff",
    fontSize: 20, 
    fontWeight: "bold",
    position: "absolute",
    bottom: 50,
    left: 15
  },
  bannerItem: {
    flex:1,
    height: 200,
    paddingHorizontal: 5,
    position:"relative"
  },
  bannerContainer: {
    width: width - 30
  },
  bannerButton:{
    backgroundColor: "#e50914",
    borderRadius: 5,
    paddingVertical:6,
    paddingHorizontal:16,
    position:"absolute",
    bottom: 10,
    left:15
  },
  bannerButtonText:{
    color:"#fff",
    fontSize: 13,
    fontWeight:"bold"
  }
})
 
 