720px is a minimalistic 720p embed-site for Twitch.TV
==========================
It can be found at http://warcode.net/720px/

* It automatically fetches and refreshes a list of those streams you follow on your Twitch.TV account that are currently live.
* The app runs completely in your browser using Javascript and nothing is actually saved by the webserver.
* Uses the official [Twitch.TV Javascript SDK](https://github.com/justintv/twitch-js-sdk).
* Uses ICANHAZ.JS and jQuery

To run the code on your own site:
-----------
* Create a new app at http://www.twitch.tv/kraken/oauth2/clients/new
* Edit index.html and  Twitch.init({clientId: 'INSERT_YOUR_CLIENT_ID_HERE'}, function(error, status) {