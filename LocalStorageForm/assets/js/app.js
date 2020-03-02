        // variables
const tweetList = document.getElementById('tweet-list');


        // eventListeners
eventListeners();

function eventListeners() {
    // form submission
    document.querySelector('#form').addEventListener('submit', newTweet);

    // remove tweet from the list
    tweetList.addEventListener('click', removeTweet);

    // document
    document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}


        // functions

function newTweet(e){
    e.preventDefault;

    // read the text area value
    const tweet = document.getElementById('tweet').value;

    // create remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    // create <li> element
    const li = document.createElement('li');
    li.textContent = tweet;

    // add the remove button to each tweet
    li.appendChild(removeBtn);

    // add to the list
    tweetList.appendChild(li);

    // add to local storage
    addTweetLocalStorage(tweet);

    // print alert
    // alert('Tweet added!');

    this.reset();
}

// removes the tweet from the DOM
function removeTweet(e) {
    if ( e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    }

    // remove from storage 
    removeTweetLocalStorage(e.target.parentElement.textContent);
}

// adds the tweets to local storage
function addTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();

    // add tweet into the array
    tweets.push(tweet);

    // convert tweet array into string
    localStorage.setItem('tweets', JSON.stringify( tweets ));
}

function getTweetsFromStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    // get the value, if null is returned then we create an empty array
    if(tweetsLS === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(tweetsLS);
    }
    return tweets;
}

// prints local storage tweets on load
function localStorageOnLoad(){
    let tweets = getTweetsFromStorage();
    
    // loop through storage and then print the values
    tweets.forEach(function(tweet) {

        // create remove button
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';

        // create <li> element
        const li = document.createElement('li');
        li.textContent = tweet;

        // add the remove button to each tweet
        li.appendChild(removeBtn);

        // add to the list
        tweetList.appendChild(li);
    })
}

// removes the tweet from local storage
function removeTweetLocalStorage(tweet) {
    
    // get tweets from storage
    let tweets = getTweetsFromStorage();

    //remove X from the tweet
    const tweetDelete = tweet.substring(0, tweet.length -1);

    // loop through the tweets and remove the tweet that's equal
    tweets.forEach(function(tweetLS, index) {
        if (tweetDelete === tweetLS) {
            tweets.splice(index, 1);
        }
    });

    // save the data
    localStorage.setItem('tweets', JSON.stringify(tweets));
}




/////////////////////////too complicated///////////////////////