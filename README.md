# bottwitter

# BOT TWITTER
- __This bot uses NodeJS__

# DESCRIPTION
- This bot allows to send tweets one after the other with a predefined interval. The content of the tweets is stored in a JSON file locally, it is also possible to make an API call to retrieve an external JSON, however it may be necessary to change the structure of the response in the index.js file.

# PROJECT SETUP
- You must install the different packages used: you can use ` npm install` or ` npm i`.

- You need to launch a local server to get the content of the JSON file that will be tweeted: you can use `python3 -m http.server [ports]` (Solution used for our tests) or other solutions. 
  <br/><br/>You can also retrieve the content via an online server, you just have to call the right URL via axios in the __index.js__ file and modify the structure of the response in the code if necessary.

- Once the server is started, you can launch the bot: use `npm start` at the root of the project. After running the program, you can set the desired time between each tweet directly in the console. 

__WARNING!!! =>__ in case of typing error to stop the program __press CTRL + C__, __do not press ENTER__. Then restart the program

# EDITING TWEETS

- To edit your tweets, simply edit the content in the tweets.json file following the structure below, you can add as many tweets as you want: 

![alt text](https://image.noelshack.com/fichiers/2022/07/5/1645217906-screenshot.png)


Thomas CAILLAU
19/02/2022
