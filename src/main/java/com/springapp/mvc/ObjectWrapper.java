package com.springapp.mvc;
import twitter4j.Status;

/**
 * Created by ashish.a on 11-Sep-14.
 */
public class ObjectWrapper {
    Status status;
    String tagname;

    public  void insert(Status status,String tagname)
    {
        this.status=status;
        this.tagname=tagname;
    }
    public Status sendstatus()
    {
        return status;
    }
    public String sendtagname()
    {
        return tagname;
    }

}
