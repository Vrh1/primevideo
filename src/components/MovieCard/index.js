import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";


export default function MoviesCard({movieURL}) {
    return (
        <TouchableOpacity>
            <Image style={styles.img} source={movieURL} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    img: {
        marginRight: 20,
    }
})