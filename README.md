
## MVP
My project is a web application inspired by Evernote and built using Express in the backend and React/Redux for the frontend. By the end of this month, this website will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:


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

```js
USERS
* id
* full name
* email
* password
* profile_pic
NOTEBOOKS
* id
* user_id
* Title
NOTES
* id
* title
* user_id
* notebook_id on delete cascade
* snippets
PHOTOS (OPTIONAL)
* id
* user_id
```

## Frontend



## Components
add notebook - add notes
edit notebook - edit notes
delete notes
delete notebook which will delete all the notes inside

## SAMPLE STATE

{
  notebooks: {
    users: {
      12: {
        id: 44,
        profile_pic: "image/url/foaioqwehje"
      }
    },
    session: {
      currentUser: {
        id: 45,
        username: "Jean Max Mezalon",
        profile_pic: "image/url/"
      }
    },
    ui: {
      loading: true/false
    },
    errors: {
      login: ["Incorrect username/password combination"]
    }
  }  
}
