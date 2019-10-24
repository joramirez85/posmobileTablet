import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
    container: {
        /* flex: 1,
        flexDirection: 'row',
        marginBottom: 16,
        marginTop: 16 */
        // flex: 1,
        // flexDirection: 'row',
        borderColor: Colors.BLACK,
        borderRadius: 4,
        borderWidth: 0.5,
        width: '15%',
        margin: 7,
        height: 190
    },
    productName: {
        fontSize: 20,
        color: Colors.DODGER_BLUE,
        marginLeft: 10
    },
    productPrice: {
        fontSize: 18,
        color: Colors.TORCH_RED,
        marginLeft: 10,
        marginBottom: 5
    },
    containerImg: {
        alignItems: 'center'
    }
})

export default styles
