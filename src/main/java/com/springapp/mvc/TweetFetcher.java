package com.springapp.mvc;

import com.google.gson.Gson;
import redis.clients.jedis.Jedis;
import twitter4j.*;
import twitter4j.conf.ConfigurationBuilder;

import java.io.BufferedWriter;
import java.io.StringWriter;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.concurrent.BlockingQueue;

/**
 * Created by ashish.a on 03-Aug-14.
 */
/*import com.google.code.geocoder.Geocoder;
import com.google.code.geocoder.GeocoderRequestBuilder;
import com.google.code.geocoder.model.GeocoderRequest;
*/

public class TweetFetcher  implements  Runnable{
    public ArrayList<Tweet> tweets;
    String querystring;

    BlockingQueue queue;
    Jedis jedis;



    //public static ArrayList<TwitterFactory> twitterFactories;
    ConfigurationBuilder cbnew;
    Mongodealer mongodealer;
    public TweetFetcher(BlockingQueue queue) throws UnknownHostException {


        jedis = new Jedis("localhost");
        jedis.set("Oracle","0");
        this.queue=queue;
        mongodealer=new Mongodealer();
        this.querystring=querystring;
        tweets=new ArrayList<Tweet>();
        cbnew = new ConfigurationBuilder();
        cbnew.setDebugEnabled(true)
                .setOAuthConsumerKey("C6sIURfr1uUAiRNBNyI2YrTtM")
                .setOAuthConsumerSecret("zn5wBbiX8rzC2Y5OLAUeS2gzd0PW57kELxhAA47SwduhtzrZMm")
                .setOAuthAccessToken("2694915404-4bokk6MPbavOLf2sFbflyPYqlBTTPxLk98kvdEt")
                .setOAuthAccessTokenSecret("hmEyX1VgLAEfOE6bTYu3cFD8TUprv2FETZ6IMpGpWnFlu");
        //twitterFactories=new ArrayList<TwitterFactory>((java.util.Collection<? extends TwitterFactory>) cb.build());
    }

    public  void run() throws IllegalStateException, NullPointerException {




        Gson gson=new Gson();
        for(int i=1;i<=100;i++) {
            StringWriter sw = new StringWriter();
            BufferedWriter bw = new BufferedWriter(sw);
            try {
                //twitterFactory[i]=new TwitterFactory(cb.build());
                TwitterFactory tfnew=new TwitterFactory(cbnew.build());
                Twitter twitter = tfnew.getInstance();
                while(true) {
                    Query query = new Query("Oracle");

                    System.out.println("Waiting");
                    query.setCount(10);
                    query.setLocale("en");
                    query.setLang("en");
                    QueryResult result = twitter.search(query);
                    for (Status status : result.getTweets()) {

                        ObjectWrapper objectWrapper=new ObjectWrapper();
                        objectWrapper.insert(status,"Oracle");
                        queue.put(objectWrapper);
                        String count=jedis.get("Oracle");
                        Integer c=Integer.parseInt(count);
                        c++;

                        jedis.set("Oracle",c.toString());
                        System.out.println("count for Oracle "+c);

                        //Thread.sleep(1000);
                        System.out.println("Inserted the tweet for oracle");


                        //if(status.getPlace()!=null)
//                        Tweet tweet = new Tweet();
//                        User user=status.getUser();
//                        System.out.println("Printing the userid");
//                        System.out.println(user.getId());
//                        System.out.println("Printing the userlocation");
//                        System.out.println(user.getLocation());
//                        System.out.println("Printing the name of the user "+user.getName());
//                        System.out.println("Printing the description of the user "+user.getDescription());
//                        System.out.println("Printing the favourite count of the user "+user.getFavouritesCount());
//                        System.out.println("Printing the follower count of the user "+user.getFollowersCount());
//                        System.out.println();
////                        ArrayList<IDs> ids= (ArrayList<IDs>) twitter.getFollowersIDs(user.getId());
//                        tweet.setTweetid((int) status.getId());
//                        tweet.setContent(status.getText());
//                        if (status.getPlace() != null) {
//                            tweet.setCountry(status.getPlace().getCountry());
//                        } else {
//                            tweet.setCountry(null);
//                        }
//
//
//
//                        tweet.setTimestamp(status.getCreatedAt().getTime());
//                        String json = gson.toJson(tweet);
                        //mongodealer.databaseput(json);
                        //System.out.println("printing time");
                        //System.out.println(status.getCreatedAt().getTime());
                        //System.out.println(status.getPlace()+" "+ status.getId()+ " "+status.getGeoLocation()+" " + status.getRetweetCount() + " " + status.getCreatedAt()  + " " + status.getText());
                    }
                    Thread.sleep(20000);
                }
                //Thread.sleep(10000);


            } catch (InterruptedException e) {
                e.printStackTrace();
            } catch (TwitterException e) {
                e.printStackTrace();
            }
        }
    }
}
