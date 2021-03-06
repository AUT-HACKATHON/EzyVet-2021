<h1 align="center">
	<br>
	<a height="200" href="#" target="_blank" alt="Link to application"><img src="https://ezyvetlife.herokuapp.com/img/logo.png" alt="Random image" width="200"></a>
	<br>
	<br>
	<p>EzyVet Life 2021</p>
</h1>

<h4 align="center">An vet search website made for the <a href="https://beta.myskillsme.com/" target="_blank" alt="Link to skills me">Skillsme</a> EzyVet Hackathon</h4>

<p align="center">
        <img src="https://img.shields.io/badge/Express%20Version-%5E4.17.1-green" >
        <img src="https://img.shields.io/badge/react%20Version-%5E17.0.2-green" >
        <img src="https://img.shields.io/github/package-json/v/AUT-HACKATHON/EzyVet-2021/main?label=Stable%20Version&color=blueviolet">
        <img src="https://img.shields.io/github/package-json/v/AUT-HACKATHON/EzyVet-2021/backend-api?label=Next%20Version&color=lightgrey">

</p>

<p align="center">
		<a href="#how-to-use">How To Use</a> •
		<a href="#key-features">Key Features</a> •
		<a href="#local-instance">Local Instance</a> •
		<a href="#license">License</a> •
		<a href="#credits">Credits</a>
</p>

## Product Architecture

![image](https://user-images.githubusercontent.com/48781163/120053553-f85a1e80-c07e-11eb-95c1-7e3017c31f94.png)

## Backend 

Backend is written in Node.js and Express.js. The database design is MongoDB hosted by AWS.
Using mongoose library to interact witht the database.

## Frontend 

Frontend is written in React.js. Interacts with the backend using axios library.

## How To Use

Go to <a href="https://ezyvetlife.herokuapp.com/">https://ezyvetlife.herokuapp.com/</a> and click list or login.

## Key Features

<ul>
<li>View list of clinics near you</li>
</ul>

## Local Instance

```sh
git clone https://github.com/AUT-HACKATHON/EzyVet-2021.git ./ezyvet-2021
```

and then

```
cd ./ezyvet-2021 && yarn;
cd ./frontend && yarn
cd ..
cp .env.example .env
```

then fill out the .env providing your mongodb information and jwt secret

```
npm run dev
```

## License

<p> 
<strong>The MIT License</strong><br>

Copyright 2021 Ezy Vet

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

</p>

## Credits

> Discord [@Mac#7445](http://urlecho.appspot.com/echo?status=200&Content-Type=text%2Fhtml&body=%40Mac%237445) &nbsp;&middot;&nbsp;
> Github [@MrGeet](https://github.com/MrGeet) &nbsp;&middot;&nbsp;<br>
> Discord [@Dablakbandit#0001](http://urlecho.appspot.com/echo?status=200&Content-Type=text%2Fhtml&body=Dablakbandit%230001) &nbsp;&middot;&nbsp;
> Github [@AshleyThew](https://github.com/AshleyThew)

### Contribution 

Aldar: Frontend setup, landing page, displaying meaningful information, list screen, using styled components, routing, docs, product architecture and design, trello setup

Ashley: Backend setup, database setup and seeder, api routes, google api integration, display map on details screen, autherization and context hooks, user stories, trello

