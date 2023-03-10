### An application for beer aficionados to discover, save and map routes to breweries all over the US.

---

## How The App Works

This full stack application was built with a React front end, a MongoDB database and Node and Express for the back end.

Users must first register for an account and log in. Correct form input is validated and log in and authentication is handled with passport and JSON Web Tokens. Once a user is logged in they have access to protected routes until logged out. While logged in users can search for a variety of types of breweries by city and state. A search makes a request to Open Brewery DB, a free API for public information on breweries. The results are displayed and multiple breweries may be selected to view on a map. This application uses React-Map-GL, a React wrapper for Mapbox GL JS, which is a part of Uber's open source projects. The breweries are mapped by passing their latitude and longitude coordinates to React-Map-GL which creates a marker for each location. Each marker has a popup that contains the brewery name and a link to get directions. Breweries may also be saved to a list for future reference.

---

## Technologies Used

- [HTML](https://html.spec.whatwg.org/multipage/)
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
- [Bootstrap](https://getbootstrap.com/)
- [JavaScript](https://www.javascript.com/)
- [ReactJS](https://reactjs.org/)
- [Node.Js](https://nodejs.org/)
  - Node Packages
    - [axios](https://www.npmjs.com/package/axios)
    - [bcrypt](https://www.npmjs.com/package/bcrypt)
    - [concurrently](https://www.npmjs.com/package/concurrently)
    - [express](https://www.npmjs.com/package/express)
    - [if-env](https://www.npmjs.com/package//if-env)
    - [is-empty](https://www.npmjs.com/package/is-empty)
    - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
    - [jwt-decode](https://www.npmjs.com/package/jwt-decode)
    - [mongoose](https://www.npmjs.com/package/mongoose)
    - [nodemon](https://www.npmjs.com/package/nodemon)
    - [passport](https://www.npmjs.com/package/passport)
    - [react-bootstrap](https://react-bootstrap.github.io/)
    - [react-map-gl](https://www.npmjs.com/package/react-map-gl)
    - [react-router-dom](https://www.npmjs.com/package/react-router-dom)
    - [react-scripts](https://www.npmjs.com/package/react-scripts)
    - [redux](https://www.npmjs.com/package/redux)
    - [validator](https://www.npmjs.com/package/validator)

---
