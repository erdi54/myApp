import { createAppContainer} from  'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import Login from "./screens/Welcome/Login";
import Register from "./screens/Welcome/Register";

const AuthenticateStack = createStackNavigator({
   Login:{
       screen:Login,
       navigationOptions:{
           header:null
       }
   },
    Register:{
        screen:Register,
        navigationOptions:{
           header:null
        }
    }

});

export  default createAppContainer(AuthenticateStack);
