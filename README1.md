# Wrestling Wresults
Wrestling Wresults is an app that tracks results of wrestling events from across the globe.  From major companies to smaller independent federations, this app will keep record of week to week results while also allowing users to submit results of their favorite independent companies that may not be featured.

# User Stories

MVP

As a user, I would like to be able to easily navigate the app.
As a user, I would like to search by company to find a list of their event results.
As a user, I would like to create, edit, and delete my own results.
As a user, I would like to see company logos as that would be easier to recognize.

Strecth Goals

As a user, I would like to see all results posted by a specific user.
As a user, I would like to be able to comment on my thoughts for the show.
As a user, I would like to give shows a rating out of 5 stars.

# Front-end

As of this moment I am planning to use EJS within my app.

# List of Mongoose models and their properties

Users Schema - {
password,
profile photo,
username}

Results - {
Results,
comments,
rating}

# List of Routes

(GET /results/) - index

(POST /newresults) - create

(DELETE /results/:id) - delete

(PATCH /results/:id) - update

# Wireframes
Homepage
![wireframe1](https://user-images.githubusercontent.com/101517274/175117627-39ba7312-8bbc-4ba7-aa24-b5496b8d2ded.jpeg)
Once you click on a company it'll take you to an index of show results
![Wireframe2](https://user-images.githubusercontent.com/101517274/175161867-955482bd-e904-41d4-824c-8971a888bb17.jpeg)
Post of show results along with star rating and user comments
![Wireframe3](https://user-images.githubusercontent.com/101517274/175162560-02c60f54-1072-443a-9347-8015edb49e7b.jpeg)
Example of user profile page.
![Wireframe4](https://user-images.githubusercontent.com/101517274/175162119-fc9a4296-c5b5-4e36-a8cb-10a8f3377491.jpeg)

