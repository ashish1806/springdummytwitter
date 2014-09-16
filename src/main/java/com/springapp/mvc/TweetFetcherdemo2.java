

/**
 * Created by ashish.a on 19-Aug-14.
 */
package com.springapp.mvc;

import twitter4j.*;
import twitter4j.conf.ConfigurationBuilder;

public class TweetFetcherdemo2 {
    public void main1(IDs iDs) throws TwitterException {
        NLPRunner nlpRunner=new NLPRunner();
        ConfigurationBuilder cb = new ConfigurationBuilder();
        cb.setDebugEnabled(true)
                .setOAuthConsumerKey("ICoyK8NMAUJCd35jZTjXWhtTA")
                .setOAuthConsumerSecret("AnFt8fT7EtMFq6sCUnJbaizu1GdtH7cRPQKvPyNlM697UJfDHQ")
                .setOAuthAccessToken("2694915404-CiLZSCec098wB9ow36vI3PeXPJvXhsmcg9pLzWs")
                .setOAuthAccessTokenSecret("Hlph76jQTAORrUaP2tjfoS9o1Es5hk3Hotek3FMAqgIyo");
        TwitterFactory tfnew = new TwitterFactory(cb.build());
        Twitter twitter = tfnew.getSingleton();
        Query query = new Query("HNY");
        //System.out.println("Waiting");
        query.setCount(10);
        query.setLocale("en");
        query.setLang("en");
        QueryResult result;

            result = twitter.search(query);
        for (Status status : result.getTweets()) {
            System.out.println("Printing the timestamp of tweet");
            System.out.println(status.getCreatedAt().getTime());
            System.out.println("Printing the sentiment score of tweet");
            System.out.println("WAITING");
            System.out.println("WAITING");
            nlpRunner.fetchsentimentscore(status.getText());
            System.out.println();
        }
       /* User user = twitter.showUser("Microsoft");
        System.out.println("Printing the userid of Microsoft");
        System.out.println(user.getId());
        System.out.println("Printing the followerscount");
        System.out.println(user.getFollowersCount());
        System.out.println();
        */try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
       // IDs iDs=new IDs();
//        User user1 = twitter.showUser();
//        System.out.println("Printing the userid of intel");
//        System.out.println(user1.getId());
//        System.out.println(user1.getName());
//        System.out.println(user1.getScreenName());
//        System.out.println("Printing the followerscount");
//        System.out.println(user1.getFollowersCount());
//        System.out.println();
    }
}
