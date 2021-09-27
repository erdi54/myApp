import React from "react";
import {View, SafeAreaView, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import style from './styles'
import Icon from "react-native-vector-icons/FontAwesome5";
import {Formik} from "formik";
import * as Yup from 'yup';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            hidePassword: true
        }
    }
    _handleSubmit = () =>{
         alert('Form Post Edildi')
    }
    render() {
        return (
            <SafeAreaView style={style.body}>
                <ScrollView>
                    <View style={style.header}>
                        <Text> Sign In </Text>
                    </View>
                    <View style={style.logo_area}>
                        <Image style={{ width:90, height:126}} source={require('../../../assets/images/home.png')}/>
                    </View>
                    <View style={style.board}>
                        <Formik initialValues={{
                            username:'',
                            password:''
                        }} onSubmit={this._handleSubmit}
                                validationSchema={Yup.object().shape({
                                    username: Yup.string().required('Kullanıcı Adı Gereklidir'),
                                    password: Yup.string().required('Şifre Gereklidir')
                                })}
                        >
                                {({
                                      values,
                                      handleSubmit,
                                      errors,
                                      handleChange,

                                }) =>(
                                    <View>
                                        <View style={style.item}>
                                            <TextInput style={style.input}
                                                       value={values.username}
                                                       onChangeText={handleChange('username')}
                                                       placeholder={"Username"}/>
                                            {(errors.username) && <Text style={style.alert}>{errors.username}</Text>}
                                        </View>
                                        <View style={style.item}>
                                            <TextInput style={style.input}
                                                       placeholder={"Password"}
                                                       onChangeText={handleChange('password')}
                                                       secureTextEntry={this.state.hidePassword}
                                            />

                                            <TouchableOpacity onPress={()=> this.setState({hidePassword:! this.state.hidePassword })} style={{position:'absolute', right:10, top:25}}>
                                                <Icon name={(this.state.hidePassword) ? 'eye-slash':'eye'} size={20}/>
                                            </TouchableOpacity>
                                            {(errors.password) && <Text style={style.alert}>{errors.password}</Text>}
                                        </View>
                                        <View style={[style.item, {flexDirection: 'row', justifyContent: 'flex-end'}]}>
                                            <Text style={{color: '#525464', fontSize: 16}}>Forget your password? </Text>
                                        </View>
                                        <View style={style.item}>
                                            <TouchableOpacity style={style.button}
                                                              onPress={handleSubmit}
                                            >

                                                <Text style={style.buttom_text}>Login</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                            )}

                        </Formik>

                        <View style={[style.item, {marginBottom:10, justifyContent: 'center', alignItems: 'center'}]}>
                            <Text>Or</Text>
                        </View>
                        <View style={style.social}>
                            <TouchableOpacity style={style.social_item}>
                                <Icon name={"facebook-f"} color={"#3b5999"} size={20}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.social_item}>
                                <Icon name={"twitter"} color={"#55acee"} size={20}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.social_item}>
                                <Icon name={"linkedin"} color={"#0077B5"} size={20}/>
                            </TouchableOpacity>
                        </View>

                        <View  style={{justifyContent:'center', alignItems:'center'}}>
                            <TouchableOpacity>
                                <Text style={{fontSize:17, fontWeight:'500', color:'#525464'}}> Dont'n have an account? <Text style={{color:'#FFB19D', fontWeight:'700'}}>Sign In</Text> </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

}
