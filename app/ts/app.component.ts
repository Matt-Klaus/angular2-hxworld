import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, RouteConfig} from "angular2/router";

import {Config} from './config.service';

import {HomeComponent} from './home.component'
import {AboutComponent} from './about.component'
import {ContactComponent} from './contact.component'

@Component({
    selector: 'my-app',
    templateUrl: '/app/ts/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent},
    {path: '/about', name: 'AboutHX', component: AboutComponent},
    {path: '/contact', name: 'Contact', component: ContactComponent},
])

export class AppComponent {
    siteHeading = Config.siteHeading;

    constructor(public router: Router) { }

    isActive(instruction: any[]): boolean {
        return this.router.isRouteActive(this.router.generate(instruction));
    }
}