/**
 * Created by ludwi_000 on 5/18/2016.
 */
import {EventEmitter} from "events";
import dispatcher from "../Dispatcher";

class FormStore extends EventEmitter {
    constructor(){
        super();
        this.formComponents = []
    }
}

const formStore = new FormStore;
dispatcher.register()

export default formStore;