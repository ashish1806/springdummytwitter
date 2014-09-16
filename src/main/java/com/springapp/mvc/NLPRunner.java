package com.springapp.mvc;

public class NLPRunner {

    public void fetchsentimentscore(String tweetcontent) {
        //String topic = "ICCT20WC";

//        ArrayList<String> tweets = TweetManager.getTweets(topic);
        NLP.init();
        //for(String tweet : tweetscontents) {
            System.out.println(tweetcontent + " : " + NLP.findSentiment(tweetcontent));
        //}
    }
}