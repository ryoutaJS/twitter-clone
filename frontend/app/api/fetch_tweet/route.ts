import { NextResponse } from "next/server";

export function POST() {
  console.log("fetch_tweet");
  return NextResponse.json({
    tweets: [
      {
        id: "test1",
        tweetInfo: {
          userName: "test1",
          createdAt: "2022/10/1",
        },
        tweetContent: {
          message:
            "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
          imgName: "cat.jpg",
        },
        tweetUserAction: {
          good: 3,
        },
        userId: "test111",
      },
      {
        id: "test2",
        tweetInfo: {
          userName: "test2",
          createdAt: "2022/10/5",
        },
        tweetContent: {
          message:
            "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
          imgName: "cat2.jpg",
        },
        tweetUserAction: {
          good: 2,
        },
        userId: "test222",
      },
      {
        id: "test3",
        tweetInfo: {
          userName: "test3",
          createdAt: "2022/10/10",
        },
        tweetContent: {
          message:
            "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
          imgName: "flower.jpeg",
        },
        tweetUserAction: {
          good: 1,
        },
        userId: "test333",
      },
      {
        id: "test4",
        tweetInfo: {
          userName: "test4",
          createdAt: "2022/10/15",
        },
        tweetContent: {
          message:
            "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
          imgName: "flower2.jpeg",
        },
        tweetUserAction: {
          good: 0,
        },
        userId: "test444",
      },
    ],
  });
}