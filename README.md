# RecipeTutorials

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.1.
Hosted on: https://easymeals34.web.app

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Recipe-Tutorials
Recap front-end project

## Description
An overall simple web-app made with Angular Framework

## Frontend methodologies used
- Flexbox
- Dynamic & validated generated content
- Responsive web design principles

## Technologies and libraries used
- HTML5
- SCSS
- TypeScript
- Lodash
- jQuery
- Slick carousel
- Toastr.js
- Firebase

# Overall Structure

## Home Page
![image](https://user-images.githubusercontent.com/50795013/123331950-96d78380-d548-11eb-850d-8ed7acb8ab93.png)

The homepage contains a main header present on all the pages, a banner with a featured recipe, a container with the recipe categories present in the db and finally 2 carousels of recipes from which the user can pick what he wants.

### Mobile view: 

![image](https://user-images.githubusercontent.com/50795013/123332234-e9b13b00-d548-11eb-9fee-e27dc9a4e746.png)


## Recipe Page
![image](https://user-images.githubusercontent.com/50795013/123332073-b5d61580-d548-11eb-8198-1ed9de6a55a4.png)
The recipe page is opened when the user clicks on a recipe from the carousel present in the main page.
This page contains a main container in which the description,picture and overall grade of the recipe is present.
At the bottom, the same carousel is present except the item that the user currently viewing.
A rating system is implemented in which the user can grade a recipe and leave a comment. The user can delete or edit his comment later on if he decides so.

### Mobile view:

![image](https://user-images.githubusercontent.com/50795013/123332311-051c4600-d549-11eb-8363-abbbf83632ab.png)

## Search Page
![image](https://user-images.githubusercontent.com/50795013/123333564-95a75600-d54a-11eb-9dab-4759a96da88a.png)
The search pages includes a grid of all the recipes present in the database along with some filters for cutting down unwanted results.

### Mobile view:

![image](https://user-images.githubusercontent.com/50795013/123332403-1ebd8d80-d549-11eb-9613-e3d276b63bfc.png)


## Database
The chosen database for this particular project is Firebase database. A picture of the structure is attached below.
![db (2)](https://user-images.githubusercontent.com/50795013/119509009-eb84b480-bd78-11eb-9d24-20b2d2fc871d.png)





