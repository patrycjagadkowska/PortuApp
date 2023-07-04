# Overview

PortuApp is a demo application created with React with a use of React Router, React Icons and Firebase.

Project contains Home Page and Authorization Page to sign in and sign up. For logged in user there are 4 more pages: Learn with all units and lessons, Lesson containing lesson content and exercise, Test with a quiz checking up knowledge from whole unit and Profile containing informations about user, his progress in learning and forms to change his data/password.


## Demo

Online demo will be soon available!

## Install

```
git clone https://github.com/patrycjagadkowska/PortuApp.git
cd PortuApp
npm install
```

## Starting development

Starting the app in the ```dev``` development

```
npm start
```

# Overview of the main components

## Learn Page

Displays all Units and lessons with information if user already completed lesson and user's progress for each unit. Receives units data from loader and keeps it in DataContext.

# Panel

Gets fetched units data and renders Panel component for each unit using ```map()``` method.

| Prop name | Description | Example |
| --- | --- | --- |
| data | And Array of object holding all units data. Each unit needs and id. | [{id: "u01", title: "Unit 01", lessons: [...], test: [...]}]

# Unit

Gets data prop holding an object with unit data. Renders title and 3 components: Lessons (list of all lessons), TestLink (link to unit's final test) and ProgressBar (bar displaying user's progress in unit).

| Data object key name | Description | Example |
| --- | --- | --- |
| title | A String that is unit's title | "Unit 1" |
| lessons | An Array of all lessons in the unit | [{id: "l01", title: "Olá! Como estás?", type: "dialogue", content: [...]}] |

### Source of images used in this project:

Home page, photo of student with tablet:
https://www.pexels.com/pl-pl/zdjecie/zdjecie-osoby-trzymajacej-tablet-3060661/
Two people, one with smartphone and the other with tablet:
https://www.pexels.com/pl-pl/zdjecie/smartfon-kobiety-przegladanie-internet-6205512/
Man next to the window holding phone in his hand:
https://www.pexels.com/pl-pl/zdjecie/mezczyzna-w-czerwonej-koszuli-z-okraglym-dekoltem-trzymajac-smartfon-obok-kobiety-w-bialym-podkoszulku-bez-rekawow-6140463/
Man with phone showing something to woman:
https://www.pexels.com/pl-pl/zdjecie/mezczyzna-w-czerwonej-koszuli-z-okraglym-dekoltem-trzymajac-smartfon-obok-kobiety-w-bialym-podkoszulku-bez-rekawow-6140463/
People in circle:
https://easyvectors.com/download/community-team-teamwork-people-1404
Laptop:
https://easyvectors.com/download/laptop-notebook-computer-black-1723

Profile page:
Blank profile picture:
https://easyvectors.com/download/blank-profile-picture-mystery-man-418