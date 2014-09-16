package com.springapp.mvc;

import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

public class BlockingQueueExample {

    public static void main(String[] args) throws Exception {

        BlockingQueue queue = new ArrayBlockingQueue(1024);

        TweetFetcherdemo1 producer = new TweetFetcherdemo1(queue);
        TweetFetcher tweetFetcher=new TweetFetcher(queue);
        Analyser consumer = new Analyser(queue);

        new Thread((Runnable) producer).start();
        new Thread(tweetFetcher).start();
        Thread.sleep(30000);
        new Thread(consumer).start();

        Thread.sleep(4000);
    }
}