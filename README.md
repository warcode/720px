720px is a minimalistic 720p embed-site for Twitch.TV
==========================
It can be found at http://www.warcode.net/

* It automatically fetches and refreshes a list of those streams you follow on your Twitch.TV account that are currently live.
* Allows you to show just the stream or stream and chat.
* Allows you to resize the stream to multiple sizes.
* The app runs completely in your browser using Javascript and nothing is actually saved by the webserver.
* Uses the official [Twitch.TV Javascript SDK](https://github.com/justintv/twitch-js-sdk).
* Uses ICANHAZ.JS and jQuery

To run the code on your own site:
-----------
* Create a new app at http://www.twitch.tv/kraken/oauth2/clients/new
* Edit index.html and  Twitch.init({clientId: 'INSERT_YOUR_CLIENT_ID_HERE'}, function(error, status) {
