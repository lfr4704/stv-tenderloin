TO launch:

$ cd stv-angular
$ ng serve --host $IP --port $PORT --disable-host-check

TO install stuff:
$ nvm install 10  // to upgrade node
$ npm install -g @angular/cli (uninstall and reinstall if not working)
$ npm install //install packages - do this inside project folder

To create the app shell:
$ ng new [name of project]

Section 8 is written shittily:

1) $ npm install angular-in-memory-web-api -S
2) $ ng generate service in-memory-data
3) Add to app.module.ts:
import { HttpClientModule } from '@angular/common/http';

# AngularTourOfHeroes



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
