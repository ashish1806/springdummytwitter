package com.springapp.mvc;

import com.mongodb.*;

import java.net.UnknownHostException;



/**
 * Created by ashish.a on 16-Aug-14.
 */
public class Mongodealer {
    Mongo mongoClient;
    DB db;
    DBCollection collection;

    public Mongodealer() throws UnknownHostException {
        mongoClient = new Mongo( "localhost" , 27017 );
        db=mongoClient.getDB("mydb4");
        collection=db.getCollection("tweetCollection");
    }

    public void databaseput(String json)
    {

        //db.testData.insert({x : 3 });
        //collection.insert({"_id" : 10,"type" : "misc"});
        System.out.println("Printing json");
        System.out.println(json);
        Object o = com.mongodb.util.JSON.parse(json);
        DBObject dbObj = (DBObject) o;
        collection.insert(dbObj);
        //collection.insert({
//                "name":"sue",
//                "age": 26,
//                status:"A",
//        })
        System.out.println("Inserted");

    }
    public void databaseretrieve(){
        //collection.find({"tweetid": {$gt:18}}).sort({tweetid:1});
//        System.out.println("Printing the sorted ");
//        DBObject sortfields=new BasicDBObject("timestamp",-1);
//        DBObject sorted = new BasicDBObject("$sort",sortfields);
//        //DBCollection collection2=db.getCollection(sorted);
//          int count=0;
//        DBCursor cursor=collection.find().sort({"_id" -1});
        //javax.management.Query query1=new Query();
//        query1.addCriteria(Criteria.where("_id").gte(30));
//        query1.with(new Sort(Sort.Direction.DESC,"_id"));
        BasicDBObject query =new BasicDBObject();
        query.put("timestamp",new BasicDBObject("$gt",30));
        DBCursor cursor=collection.find(query).sort(new BasicDBObject("timestamp",-1)).limit(20);
        int count=0;
//        BasicQuery query=new BasicQuery("{timestamp:{$lt : 40}");
//        query.with(new Sort("timestamp"));
//        DBCursor cursor1= (DBCursor) collection.findOne(query);
        while(cursor.hasNext()){
            count++;
            System.out.println(cursor.next());

        }
        System.out.println(count);
    }
    public void sort(String timestamp, int i){
        //collection.find({)
    }
}
