import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {UsernameValidators} from './usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {
    form: ControlGroup;
    constructor(fb: FormBuilder){
        this.form = fb.group({
            username: ['', Validators.compose([
                            Validators.required,
                             UsernameValidators.cannotContainSpace
                            ]), UsernameValidators.shouldBeUnique],
            password: ['', Validators.required]
        })
    }
    // form = new ControlGroup({
    //     username: new Control('', Validators.required),
    //     password: new Control('', Validators.required)
    // });

    signup(){
        this.form.find('username').setErrors({
            invalidLogin:true
        })
        console.log(this.form.value)

    }
    log(user){
        console.log(user)
        console.log("hello")

    }
}