# MVP Boilerplate
Fullstack Javascript MVP Boilerplate for creating MVPs quickly with enough room to grow.

## Usage
`npm start` to start the server (production).

`npm run dev` to start the server (development)

## Introduction≈
This boilerplate uses server rendered views as not everyone wants to create a Single Page Application (SPA).
For server side views, we're using Jade, the default view engine of Express. If you haven't used Jade before, trust me - give it a try and you'll quickly realise that your views are easier to read & write.

Foundation For Sites and Sass (libsass) are already setup. I prefer Foundation over Bootstrap simply because I find that I fight Foundation less when I've to implement custom designs, but it includes enough basic styles for an MVP. 

Vue.js is used for additional client-side functionality. Its API is easy to learn and is very conducive to getting functionality done quickly. You can optionally install `Vue-Router` and `Vue-Resource` if you want to take a SPA approach with Vue.

## Goals
Easy too modify landing/marketing pages.
Register & login functionality with reset password functionality.
Social media login (Twitter, Facebook etc.)
Image manipulation & processing.
Transactional email processing.
SaaS payment solution - Stripe integration (individuals & teams).
Scalability:
	Express Cluster
	Redis for server-session store
	Pusher for websocket support
	Stateless REST API via JWTs 
Faker for dummy data.

## Realtime
This boilerplate is not using socket.io as maintaining a realtime socket.io cluster etc. is not conducive to getting an MVP out the door.
Instead, we use Pusher, a 3rd party realtime service. This is ideal when building an MVP. You can later switch out Pusher for Socket.io or SocketCluster etc. if required.

## Authentication
Passport.js is used for authentication. Server sessions are stored in Redis by default to improve scalability when using multiple express instances.
Passport-jwt is used for user authentication when using the REST API.
The reason for this is that if you decide to write a native iOS or Android client for example, you don't want these to be dealing with cookies in Objective-C/Swift or Java). A JSON Web Token is requested from `/api/auth/token`and stored in the client (cookie for browser as localstorage carries more security risks). Each request to the REST API will include the user's JWT.