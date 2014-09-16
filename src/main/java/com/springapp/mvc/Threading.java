//package com.springapp.mvc;
//
//import twitter4j.TwitterException;
//
//import java.io.IOException;
//import java.net.UnknownHostException;
//
///**
// * Created by ashish.a on 16-Aug-14.
// */
//public class Threading extends Thread{
//    private Thread t;
//    private String threadName;
//
//    Threading( String name){
//        threadName = name;
//        System.out.println("Creating " +  threadName );
//    }
//    public void run() {
//        System.out.println("Running " +  threadName );
//        try {
//            if(threadName=="Thread1")
//            {
//                Mongodealer mongodealer=new Mongodealer();
//
//                mongodealer.databaseretrieve();
//
//                mongodealer=null;
//                Thread.sleep(10000);
//
//            }
//            else
//            {
//                System.out.println("creatring tweetfetcherdemo");
//                TweetFetcherdemo1 tweetFetcherdemo=new TweetFetcherdemo1("Microsoft");
//                try {
//                    tweetFetcherdemo.main1();
//                } catch (TwitterException e) {
//                    e.printStackTrace();
//                }
//            }
//        } catch (UnknownHostException e) {
//            e.printStackTrace();
//        } catch (IOException e) {
//            e.printStackTrace();
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//        //run();
//        //System.out.println("Thread " +  threadName + " exiting.");
//    }
//
//    public void start ()
//    {
//        System.out.println("Starting " +  threadName );
//        if (t == null)
//        {
//            t = new Thread (this, threadName);
//            t.start ();
//        }
//    }
//
//}