import { Image } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";

import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";
import MovieTheWhell from "../../assets/movies/the_wheel_of_time.png";
import { FlatList } from "react-native";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import MoviesCard from "../../components/MovieCard";
import { ScrollView } from "react-native";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MOVIESWATCH } from "../../utils/moviesWatch";


export default function Home() {
    return(
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Image style={styles.primeLogoImg} source={PrimeVideoLogo}></Image>
                <Image style={styles.amazonLogoImg} source={AmazonLogo}/>
            </View>

            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Home</Text>
                </TouchableOpacity>
                    
                <TouchableOpacity>
                    <Text style={styles.categoryText}>TV Shows</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.categoryText}>Movies</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.categoryText}>Kids</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.movieImageThumbnail}>
                <Image source={MovieTheWhell}/>
            </TouchableOpacity>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>
            <Text style={styles.movieText}>Continue Watching</Text>
            {/* Flatlist para criar listas */}
            <FlatList data={MOVIESWATCHING}
            keyExtractor={(item) => item.id}
            renderItem={({item} ) => <MoviesCard movieURL={item.moviesURL}/>}
            horizontal
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}> </FlatList>

            <Text style={styles.movieText}>Crime Movies</Text>
            {/* Flatlist para criar listas */}
            <FlatList data={MOVIESCRIME}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}> </FlatList>
            
            <Text style={styles.movieText}>Watch in your language</Text>
            {/* Flatlist para criar listas */}
            <FlatList data={MOVIESWATCH}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}> </FlatList>
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232F3E",
        alignItems: "flex-start",
    },
    header: {
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    amazonLogoImg: {
        marginTop: -32,
        marginLeft: 30,
    },
    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
        marginBottom: 15,
    },
    categoryText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#FFF",
    },
    movieImageThumbnail: {
        width: "100%",
        alignItems: "center",
    },
    movieText: {
        color: "#FFFF",
        fontSize: 18,
        fontWeight: "700",
        padding: 15,
    },
    contentList: {
        paddingLeft: 18,
        paddingRight: 30,
    },
    contentMovies: {

    },
})