import {Component} from 'angular2/core';
import {ContactFormComponent} from "./contact-form.component";
import {SubscriptionFormComponent} from "./subscription-form.component";
import {ChangePasswordFormComponent} from "./change-password-form.component";


@Component({
    selector: 'my-app',
    directives: [ContactFormComponent, SubscriptionFormComponent, ChangePasswordFormComponent],
    template: `
       <div class="container">
           <h1>This is in the App component</h1>
           <h1>Contact</h1>
           <my-contact-form></my-contact-form>
           <h1>Subscription</h1>
           <subscription-form></subscription-form>
           <h1>Change Password Form</h1>
           <change-password-form></change-password-form>
       </div>
    `
})
export class AppComponent { }