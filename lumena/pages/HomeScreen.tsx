import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeScreen: React.FC = (name) =>  {
    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>Lumena</Text>
                <Image source={{ uri: 'https://i.pravatar.cc/300' }} style={styles.roundImage}/>
            </View>
            <View style={styles.organisationArea}>
                <View style={styles.square1}>
                    <Text style={styles.orgNo}>Organisations</Text>
                    <Text style={{ textAlign:'center', fontSize: 55, fontWeight: 'bold' }}>3</Text>
                </View>
                <View style={styles.verticalLine} />
                <View style={styles.square}>
                    <Text style={styles.orgNo}>Documents</Text>
                    <Text style={{ textAlign:'center', fontSize: 55, fontWeight: 'bold' }}>7</Text>
                    <MaterialIcons name='form' size={20} color='#212121' style={{justifyContent: 'center', alignContent: 'center'}}/>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 35, paddingRight: 35, paddingTop: 20}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
                <View>
                    <Text style={{width: 50, textAlign: 'center', color: '#212121'}}> </Text>
                </View>
                <View style={{flex: 1, height: 1, backgroundColor: '#fcfcfc'}} />
            </View>
            <View style ={styles.displayedID1}>
                <Image source={{uri: 'https://i.pravatar.cc/20'}} style={{ borderRadius: 20 }}/>
                <View style={{flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 20}}>
                    <Text style={ styles.displayedIDTitle }>St Joseph Engineer College</Text>
                    <Text style={ styles.displayedIDTitle }>1234-5678-90</Text>
                </View>
            </View>
            <View style ={styles.displayedID1}>
                <Image source={{uri: 'https://i.pravatar.cc/20'}} style={{ borderRadius: 20 }}/>
                <View style={{flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 20}}>
                    <Text style={ styles.displayedIDTitle }>Example Company Name</Text>
                    <Text style={ styles.displayedIDTitle }>1234-5678-90</Text>
                </View>
            </View>
            <View style ={styles.displayedID1}>
                <Image source={{uri: 'https://i.pravatar.cc/20'}} style={{ borderRadius: 20 }}/>
                <View style={{flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 20}}>
                    <Text style={ styles.displayedIDTitle }>NFC Use123</Text>
                    <Text style={ styles.displayedIDTitle }>1234-5678-90</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: '#212121',
    },

    titleArea: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    roundImage: {
        width: 65,
        height: 65,
        borderRadius: 50,
        marginLeft: 20,
    },
    title: {
        fontSize: 55,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fcfcfc',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 40,
        color: '#fcfcfc',
    },


    organisationArea: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },
    square1: {
        width: 150,
        height: 150,
        backgroundColor: '#fcfcfc',
        borderRadius: 20,
        marginEnd: 20,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
    },
    orgNo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    square: {
        width: 150,
        height: 150,
        backgroundColor: '#fcfcfc',
        borderRadius: 20,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
    },
    verticalLine: {
        borderEndColor: '#fcfcfc',
        borderEndWidth: 2,
        height: '100%',
        backgroundColor: '#212121',
        marginEnd: 20,
    },
    horizontalLine: {
        borderEndColor: '#fcfcfc',
        borderEndWidth: 10,
        width: '100%',
        backgroundColor: '#212121',
    },

    displayedID1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '83%',
        backgroundColor: '#fcfcfc',
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
        
    },

    displayedIDTitle: {
        fontSize: 20,
        fontWeight: 'bold',


    }

});

export default HomeScreen;