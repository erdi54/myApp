import {StyleSheet} from "react-native";

export default StyleSheet.create({
    body:{
        backgroundColor:'white',
        flex:1
    },
    header:{
        padding:15,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontWeight: '500',
        fontSize: 20,
        color: '#525464'
    },
    logo_area:{
        alignItems: 'center',
        marginTop: 40,
    },
    board:{
       marginTop: 10,
       paddingHorizontal:30
    },
    item: { marginBottom:20 },
    input: {
        borderWidth:1,
        borderColor:"#B0B0C3",
        backgroundColor: "#F7F7F7",
        padding: 20,

     },
    button:{
        backgroundColor:'#20C3AF',
        paddingVertical:20,
        borderRadius:5,
        justifyContent: 'center',

    },
    buttom_text:{
        textAlign:'center',
        color: 'white',
        fontSize: 17,
        fontWeight: '700'
    },
    social:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom: 15
    },
    social_item: {
        padding: 10,
        width: 100,
        height: 60,
        borderWidth: 1,
        borderColor: '#E2E2E0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    alert:{
        color:'red',
        fontSize:15
    }


});

