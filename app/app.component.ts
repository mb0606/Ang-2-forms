import {Component} from 'angular2/core';
import {SignUpFormComponent} from './signup-form.component'
import {ContactFormComponent} from "./contact-form.component";
import {SubscriptionFormComponent} from "./subscription-form.component";

@Component({
    selector: 'my-app',
    directives: [SignUpFormComponent,
                 ContactFormComponent,
                 SubscriptionFormComponent],
    template: `
        <div class="container">
            <div class="row">
                <my-contact-form></my-contact-form>
                <subscription-form></subscription-form>
                <signup-form></signup-form>

            </div>
        </div>
    `
})
export class AppComponent {
}