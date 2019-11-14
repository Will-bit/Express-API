## REQUIRED

* Setup an API with a project structure like:

```bash
/client
--/server
----/routes
------index.js
------chirps.js
----server.js
----chirpsstore.js (file provided in this lab)
```

* In `routes/chirps.js`, create `GET`, `POST`, `PUT`, `DELETE` methods on a router that is created in `chirps.js`.
  * Import `chirpsstore`, and use it to read and write chirps to the json file.
    * The json file will be created the first time you run successfully!
    * Remember to export your router with `module.exports`.
* In `routes/index.js`, import the `chirps` router and add it to a new router.
  * Use `app.use` with the `/chirps` route to add to the root `api` router.
  * Export the router.
* In `server.js`, import the routes folder (`./routes`).
  * Add the `api` router to the express app with the path `/api`.
* Test all of your methods using Postman ([https://www.getpostman.com/]())

## ADVANCED

* Create an `index.html`, `styles.css`, and `app.js` file in the `client` folder.
  * Code an app that uses jQuery to call your API and displays chirps.
    * Create a form that lets you create new chirps
      * Do not use a form submit (you only need the inputs and not necessarily a form!)
      * Use a button `click` event to call the API.
    * Add an `x` next to each chirp that will delete the chirp when clicked.
    * When a chirp is clicked, popup a modal that lets you edit the chirp.
* Remember to use `express.static` middleware!
* **HINT:** jQuery functions for calling APIs: `$.ajax`, `$.get`, `$.post`

      <script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"></script>