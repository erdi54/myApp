import {observable, action} from "mobx";
class MainStore {
    @observable name = 'Erdi Özcan';
    @action getName(){
        return  this.name;
    }
}
export default new MainStore();
