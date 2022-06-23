require('dotenv').config()
const {TwitterClient} = require('twitter-api-client')
const axios = require('axios')
const sleep = require('sleep-promise')
const ps = require("prompt-sync")
const prompt = ps({sigint: true})

// We get the different access keys and tokens from .env file.
const twitterClient = new TwitterClient({
    apiKey: process.env.TWITTER_API_KEY,
    apiSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})
// We use axios to call our JSON file, contained in our server.
axios.get('http://127.0.0.1:7300/Content/tweets.json')
    .then(response => {
// If the call returns content (data), then the constant data 
// takes the returned value, otherwise it will be empty.
    const data = response.data.data ? response.data.data : {}
    let tweet
// The buildTweet() function allows us to build our tweet by assigning
// it a hashtag and a message. 
    function buildTweet(i) {
        tweet = (data.Tweets[i].tweet + " " + data.Tags[0].hashtag) 
    }
// The moveArray() function launches a loop allowing us to navigate in
// our JSON file and to retrieve the content of the tweets by calling
// the buildTweet() function. After that, we send the tweet with the
// associated twitter account (via the access keys and tokens) 
// using the method twitterClient.tweets.statusesUpdate.
    async function moveArray(){
// ''Prompt'' Allows you to select via the console, the desired time between 
// each tweet. WARNING!!! => in case of typing error to stop the program press
// CTRL + C, do not press ENTER.
        let delay = prompt("Entrer le délais souhaité entre chaque tweet en millisecondes (1000 ms => 1 s): ")
        console.log('Votre délais de : ', delay,' ms est bien pris en compte')

        for(var i = 0; i < data.Tweets.length; i++){
            buildTweet(i)
            twitterClient.tweets.statusesUpdate({
                status: tweet
            })
// We use await sleep(value in milliseconds) to determine the time 
// between each tweet. By default the value is 5000 ms, equivalent to 5 seconds
        await sleep(delay)
        console.log("Twitted !", i ,tweet)
        }
    }

// Here we call the moveArray() function
    moveArray()
}).catch (err => {
    console.error(err)
})




