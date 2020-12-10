# NgxLib

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Code scaffolding

Run `ng generate component component-name --project ngx-lib` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-lib`.
> Note: Don't forget to add `--project ngx-lib` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-lib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-lib`, go to the dist folder `cd dist/ngx-lib` and run `npm publish`.

## Running unit tests

Run `ng test ngx-lib` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## THEME
1. Add 'pepperi-theme' class name on your <root> element tag.
2. Import '~@pepperi-addons/ngx-lib/theming' on your global style file (.scss).
3. And @include pepperi-theme() to apply pep theme on the app.

## SVG's
1. Add the following to the angular.json file.
"assets": [
    {
        "glob": "**/*",
        "input": "./node_modules/@pepperi-addons/ngx-lib/src/assets",
        "output": "./assets"
    }
],