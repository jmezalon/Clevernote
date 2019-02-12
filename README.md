
## MVP
My project is a web application inspired by Evernote and built using Express in the backend and React/Redux for the frontend. By the end of this month, this website will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

https://trello.com/b/MU2YSRRo/evernote-clone  [Link to TRELLO]

1. New account creation, login, and guest/demo login
2. A production README
3. completed sidebar, middle section and note taking box
4. sidebar should have note filtering
5. database to save the notes
Bonus: Add tags and the ability to share notes
Bonus: helpful hint at the bottom of the sidebar

* create the root with the app and the 3 session that will be in page
* create a detail README.md file explaining the app
* create a login and sign up page
* be able to add notes and save them in a notebook folder as well as having the ability to edit them, delete and possibly share them.

## The side Bar
1. I want to be able to search and filter all the notes save
2. have an add note button
3. a favorite section which will contain a shortcut to all the stared notes
4. see all the notes
5. be able to create and edit notebooks which will contain many notes
6. have a trash bin to hold all of the deleted notes
if I have extra time, I will work on the tag button and on the help section in the bottom.

## The middle section
1. display a title section on top, the notebook title more specifically.
2. the number of notes contain in the notebook along with a menu to add the notebook to favorite/shortcut
3. and we will have a list of the notes with the title and a two line snippet of the note content.
4. and show the time that the note was created and updated

## The note box Content
1. a menu to at the top right to delete the note
2. the title box for the note
3. the note text box
4. and if we have time, be able to expand the page by removing the sidebar and middle section with a button on the top right.
5. add the tag as well if we have time

## The Login / Sign Up page
1. be able to create a profile and log in if a profile had already been created
2. be able to sign out
3. create a footer



In my Schema, we will have the user, the notebooks and the notes
// removed snippet and user_id in notes
// added notebook_type

```js
USERS
* id SERIAL PRIMARY KEY
* full name VARCHAR NOT NULL
* email VARCHAR NOT NULL
* profile_url VARCHAR optional
* created_at TIMESTAMP
NOTEBOOKS
* id SERIAL PRIMARY KEY
* notebook_type VARCHAR NOT NULL can include regular, trash, favorite, etc
* user_id INT REFERENCES notebooks(id) ON DELETE CASCADE
* Title VARCHAR NOT NULL
* created_at TIMESTAMP
NOTES
* id SERIAL PRIMARY KEY
* title  VARCHAR UNIQUE optional
* notebook_id on INT REFERENCES notebooks(id) ON DELETE CASCADE
* body TEXT NOT NULL
* tag VARCHAR optional
* created_at TIMESTAMP
```

## backend
start with seed.sql
continue with the different routes, adding, editing and deleting

```js

* user Routes
GET getAllUsers "/api/users"

GET getOneUser "/api/users/:id"

* notebook Route
GET getAllNotebooks "/notebooks"

GET getUserNotebooks "/api/user/:id/notebooks"

GET getAllNotesFromNotebook "/api/notebooks/:id/notes"

POST addNotebookForUser "/api/notebooks"

PATCH editNotebookForUser "/notebooks/:id"

DELETE deleteNotebookForUser "/notebooks/:id"

* note Route
GET getOneNoteForUser "/api/notes/:id"

POST addNoteForUser "/notes"

PATCH editNoteForUser "/api/notes/:id"

DELETE deleteNoteForUser "/api/notes/:id"

```


## Frontend
User Login Page,
Save Note and Show snippet,
have button to edit, delete and move note,
CSS

## components Tree

```js

                                   APP
                           __________|__________
                          |                     |
                          |                     |
                      ALL NOTES             SIDEBAR
                          |                     |
                   _______|________             |_____
                  |                |                  |
              CURRENT NOTE       NEW NOTE   LINK TO ADD, EDIT, TRASH
                  |                |
            ______|_____      EDIT & DELETE
           |            |
SAVED TO SHORTCUT  SAVE TO NOTEBOOKS

```

##  Implementation Timeline

1. Backend setup and Frontend setup (4 days)
2. User Model, API, Search, and Components (5 days)
Objective: Users can be created, edit, searched for, and delete notes. (4 days)
3. Login page with frontend authentication (3 days)
work on some css using my preferred color scheme
4. login and user page (2 days)
Objective: bonus features.
5. Advanced Search/Pagination for Users Index, expend page and sharing (2 day)

## Features
add notebook - add notes
edit notebook - edit notes
move notes to different notebook
Tag to help with searching
delete notes
delete notebook which will delete all the notes inside

## SAMPLE STATE
```js
state = {
  users = {
    id: 1,
    username: "john424",
    email: "jhony424@gmail.com",
    profile_pic: "https://static.boredpanda.com/blog/wp-content/uploads/2018/04/5acb63d83493f__700-png.jpg"
    },
  notebooks: {
    id: 2,
    user_id: 3,
    title: "Bucket list"
    notebook_type: "trash"
  }
    note: {
        id: 45,
        notebook_id: 1,
        title: "todo list",
        body: "buy milk, shop for ring, ...",
        tag: "findList"    
    },
    errors: {
      login: ["Incorrect username/password combination"]
    }
  }  
  ```
