package com.springapp.mvc;
import java.util.concurrent.BlockingQueue;

public class Analyser implements Runnable {

    protected BlockingQueue queue = null;

    public Analyser(BlockingQueue queue) {
        this.queue = queue;
    }

    public void run() {
        while (true) {
            try {

                ObjectWrapper objectWrapper = new ObjectWrapper();
                objectWrapper = (ObjectWrapper) queue.take();
                if (objectWrapper.sendtagname() == "Microsoft") {

                    System.out.println("Printing the text of tweets");
                    System.out.println(objectWrapper.sendstatus().getText());
                    //System.out.println(queue.take());
                    //System.out.println(queue.take());
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}