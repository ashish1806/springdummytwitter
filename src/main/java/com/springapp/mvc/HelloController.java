package com.springapp.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HelloController {
	@RequestMapping(value="/",method = RequestMethod.GET)
	public String printWelcome(ModelMap model) {
		model.addAttribute("message1", "Hello world!");
        model.addAttribute("message2","i am the best");
		return "hello";
	}
    /*@RequestMapping(value="/gettweet",method=RequestMethod.GET)
    public String printTweets(ModelMap model) throws UnknownHostException {
        System.out.println("two");

        TweetFetcherdemo tweetFetcherdemo=new TweetFetcherdemo();
        //tweetFetcherdemo.main1();
        System.out.println("one");
        for (int i = 0; i < 100; i++) {
            //Tweet tweet = tweetFetcherdemo.tweets.get(i);
            //model.addAttribute("tweetid", tweet.getTweetid());
            //model.addAttribute("tweetcontent", tweet.getContent());
            //model.addAttribute("tweetCountry", tweet.getCountry());
            //return "hello1";
        }
        return "hello1";
    }*/
}