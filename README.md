# Techapplication - RaveMatch

Welcome to our Tech project: RaveMatch, a music matching app for music lovers. Users discover new music and meet new people, based on their moods and music tastes.

## Inhoudsopgave

- [Function](#Function)
- [Installation](#installation)
- [Use](#gebruik)
- [API Endpoints](#api-endpoints)
- [Technologies](#technologies)
- [Contributions](#contributions)
- [License](#license)

## Function

RaveMatch is a music matching app that helps music lovers discover new songs and socialize. Our matching system connects users based on their shared music interests, allowing them to meet new people and expand their network.

## Installation

Welcome to the team A (TEC1) repository. 

1. Clone the repository
`git clone https://github.com/briannededeugd/techapplication/`

2. Installeer the necessary dependencies
`npm install`

3.  Run the following commands to verify that Node is installed correctly
`node install`  
`node --version`

4. Create an `.env` file and add the necessary data (e.g. MongoDB URI) 

5. Start the project with `npm start`

## Use

### Register 
Users can create their own account, with which they can then meet and follow new people, and discover, listen to and like songs. 
### Explore 
The Explore page shows a list of user profiles with their first name, last name, age, favorite songs and moods. Users can follow or unfollow other users. 
### My Profile 
Shows the profile of the logged in user, with their name, age, profile picture, 'Like Songs' and musical moods. Users can also see who they follow. 
### Filtering 
Users can filter what other users they encounter based on the mood they are in at the time. 
### Matching
The Matching page allows users to discover the song that best suits them at that moment. By completing a questionnaire, the ideal music match is shown, based on the preferred language selected by the user. 
### Liking 
Users can discover new songs, view the artist and title of each song, and choose to like or dislike a song.

## API Endpoints

### filterRouter.js 
- `GET /`: Returns a confirmation message indicating that the filter router is working. 

### followingrouter.js 
- `GET /following/explore`: Loads the Explore page with a list of all users. 
- `POST /following/follow/:profileId`: Follow or unfollow a user based on the profileId and followStatus in the request. 
- `GET /following/myprofile/:adminId`: Loads the My Profile page for the admin with ID adminId along with the numbers liked by the admin. 
- `GET /following/followlist`: Loads the Following page with a list of followed users. 
- `POST /following/followlist/:profileId`: Unfollow a user based on the profileId and followStatus in the request.

### likingRouter.js 
- `GET /liking`: Loads the Songs page with a list of all songs. 
- `POST /liking/like/:songId`: Like or unlike a song based on the songId and likeStatus in the request. 

### matchingRouter.js 
- `GET /`: Render the 'matchingfeels' page. 
- `GET /matchingelements`: Render the 'matchingelements' page. 
- `GET /matchinglanguage`: Render the 'matchinglanguage' page. 
- `GET /matchingresult`: Render the 'matchingresult' page. 
- `POST /userPost`: Process and save the user selected features, moods and languages ​​and navigate to the next page. 
- `POST /matchingresult`: Process the user input, filter the songs based on the selected options.
 
## Technologies

These are the most important technologies that we have used for our project:
- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- bcrypt
- EJS
- env
- Nodemon
- Slug

In addition, we used the following development dependencies:
- ESLint
- @typescript-eslint/parser
- @typescript-eslint/eslint-plugin

These ensure that the packages are consistent and prevent multiple conflicts in the package(-lock).json.

## Contributions

Contributions from team members: 

* **Tristan** builds the registering / logging in feature, using sessions and cookies.
* **Brianne** builds a song match feature based on three queries and the database, expanding with "top 5 best matches".
* **Elaine** takes responsibility of developing the filtering feature based on multiple queries.
* **Jarno** creates a following system, complete with an explore page.
* **Bryan** gives users the ability to like, and therefore save, songs.

We welcome any help to improve RaveMatch! If you want to help, follow these steps:

1. Make a copy (fork) of the project. 
2. Create a new branch with a clear name, for example `new-Function` or `bug-solving`. 
3. Make your adjustments in that branch. 
4. Make sure your code fits well with the rest of the code and that you don't break anything. 
5. Test your adjustments well and make sure everything still works. 
6. Save (commit) your changes with a short explanation of what you have done. 
7. Ask if your changes can be added (pull request) to the main project. Explain what you changed, why and how you tested it.

If you find any issues or have new ideas, open a new issue on the [issue tracker](https://github.com/briannededeugd/techapplication/issues). Explain clearly what the problem is or what your idea is and how you can make the problem happen (if you can).

## License

This project is licensed under the MIT License. 

Copyright (c) 2023 Brianne 

See the [LICENSE](https://github.com/briannededeugd/techapplication/blob/main/LICENSE) file for full license text.