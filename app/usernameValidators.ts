import {Control} from '@angular2/forms';

export class UsernameValidators {
    static cannotContainSpace(control: Control){
        if(control.value.indexOf(' ') >= 0)
            return { cannotContainSpace: true }

        return null;

}