import React from "react";
import Route from "./src/appRoute";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainStore from "./src/Store/MainStore";

export default class App extends React.Component {
    componentDidMount =async  () =>{
        /*
        AsyncStorage.setItem('app_name', 'MtBB');
        const app_name = await AsyncStorage.getItem('app_name')
            console.log(app_name)
        */
        console.log(MainStore.getName());

    }

    render() {
        return <Route/>
    }
}
