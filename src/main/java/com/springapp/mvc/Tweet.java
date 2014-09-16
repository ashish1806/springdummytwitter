package com.springapp.mvc;

/**
 * Created by ashish.a on 12-Aug-14.
 */
public class Tweet {
    public long tweetid;
    public long timestamp;
    public String content;
    public String country;

    public long getTweetid(){
        return tweetid;
    }
    public String getContent(){
        return content;
    }
    public String getCountry(){
        return country;
    }
    public long getTimestamp()
    {
        return timestamp;
    }
    public void setTweetid(long tweetid)
    {
        this.tweetid=tweetid;
    }
    public void setContent(String content)
    {
        this.content=content;
    }
    public void setCountry(String country)
    {
        this.country=country;
    }
    public void setTimestamp(Long timestamp)
    {
        this.timestamp=timestamp;
    }
}
