package com.springapp.mvc;

import com.google.gson.Gson;
import com.mongodb.*;
import twitter4j.TwitterException;
import twitter4j.TwitterFactory;
import twitter4j.conf.ConfigurationBuilder;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by ashish.a on 03-Aug-14.
 */
/*import com.google.code.geocoder.Geocoder;
import com.google.code.geocoder.GeocoderRequestBuilder;
import com.google.code.geocoder.model.GeocoderRequest;
*/

public class TweetFetcherdemo {
    public static ArrayList<Tweet> tweets;
    public static ArrayList<TwitterFactory> twitterFactories;
    public TweetFetcherdemo()
    {
        tweets=new ArrayList<Tweet>();
        ConfigurationBuilder cb = new ConfigurationBuilder();
        cb.setDebugEnabled(true)
                .setOAuthConsumerKey("C6sIURfr1uUAiRNBNyI2YrTtM")
                .setOAuthConsumerSecret("zn5wBbiX8rzC2Y5OLAUeS2gzd0PW57kELxhAA47SwduhtzrZMm")
                .setOAuthAccessToken("2694915404-4bokk6MPbavOLf2sFbflyPYqlBTTPxLk98kvdEt")
                .setOAuthAccessTokenSecret("hmEyX1VgLAEfOE6bTYu3cFD8TUprv2FETZ6IMpGpWnFlu");
//        twitterFactories=new ArrayList<TwitterFactory>((java.util.Collection<? extends TwitterFactory>) cb.build());

    }

    public void main1() throws IllegalStateException, IOException, NullPointerException, TwitterException {

        /*Geocoder geocoder = new Geocoder();
        GeocoderRequest geocoderRequest = new GeocoderRequestBuilder().setAddress("Paris, France").setLanguage("en").getGeocoderRequest();
        GeocodeResponse geocoderResponse = geocoder.geocode(geocoderRequest);

*/
        Gson gson=new Gson();
        Mongo mongoClient = new Mongo( "localhost" , 27017 );
        DB db=mongoClient.getDB("mydb6");
        DBCollection collection=db.getCollection("tweetCollection");

/*        ConfigurationBuilder cb = new ConfigurationBuilder();
        cb.setDebugEnabled(true)
                .setOAuthConsumerKey("C6sIURfr1uUAiRNBNyI2YrTtM")
                .setOAuthConsumerSecret("zn5wBbiX8rzC2Y5OLAUeS2gzd0PW57kELxhAA47SwduhtzrZMm")
                .setOAuthAccessToken("2694915404-4bokk6MPbavOLf2sFbflyPYqlBTTPxLk98kvdEt")
                .setOAuthAccessTokenSecret("hmEyX1VgLAEfOE6bTYu3cFD8TUprv2FETZ6IMpGpWnFlu");
//        TwitterFactory[] twitterFactory;
        for(int i=1;i<=1;i++) {
            StringWriter sw = new StringWriter();
            BufferedWriter bw = new BufferedWriter(sw);
            try {
                //twitterFactory[i]=new TwitterFactory(cb.build());
                TwitterFactory tf1=new TwitterFactory(cb.build());
                Twitter twitter = tf1.getInstance();
                //Thread.sleep(10000);

                Query query = new Query("#mcdonalds");
                //for (int i = 0; i < 10; i++) {
                System.out.println("Waiting");
                query.setCount(100);
                query.setLocale("en");
                query.setLang("en");
                QueryResult result = twitter.search(query);
                for (Status status : result.getTweets()) {
                    //if(status.getPlace()!=null)
                    Tweet tweet=new Tweet();
                    tweet.setTweetid((int)status.getId());
                    tweet.setContent(status.getText());
                    //tweet.tweetid=(int)status.getId();
                    //tweet.content=status.getText();
                    if(status.getPlace()!=null) {
                        tweet.setCountry(status.getPlace().getCountry());
                        //tweet.country = status.getPlace().getCountry();
                    }
                    else
                    {
                        tweet.country=null;
                    }
  */
                    Map<String, Object> documentMap = new HashMap<String, Object>();
	                documentMap.put("database", "mkyongDB");
	                documentMap.put("table", "hosting");

	                Map<Long, Integer> documentMapDetail = new HashMap<Long, Integer>();
	                documentMapDetail.put(12345L, 99);
	                documentMapDetail.put(123456L, 789);
	                //documentMapDetail.put("active", "true");

                    documentMap.put("detail", documentMapDetail);

                    System.out.println(documentMap);


                    collection.insert(new BasicDBObject(documentMap));


                    /*String json=gson.toJson(tweet);*/
                    //Object o = com.mongodb.util.JSON.parse(json.toString());
                    //DBObject dbObj = (DBObject) o;
                    //collection.insert(dbObj);
                    System.out.println("Inserted");
                    //tweets.add(tweet);

                    //System.out.println(status.getPlace()+" "+ status.getId()+ " "+status.getGeoLocation()+" " + status.getRetweetCount() + " " + status.getCreatedAt()  + " " + status.getText());
                    //DBCursor dbCursor=collection
                //}


                //}
                //Thread.sleep(10000);
                //bw.close();
                //sw.close();
//             catch (InterruptedException e) {
//                e.printStackTrace();
//            } catch (TwitterException e) {
//                e.printStackTrace();
//            } catch (IOException e) {
//                e.printStackTrace();
//            }

            //}
        DBCursor cursor=collection.find();
        int count=0;
        while(cursor.hasNext()){
            count++;
            Map<Long, Integer> documentMapDetailnew= (HashMap<Long, Integer>) cursor.next().get("detail");
            System.out.println(documentMapDetailnew);
            //System.out.println(cursor.next());
        }
        System.out.println(count);
        // write your code here
    }
}
