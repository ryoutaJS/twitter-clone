// tweet一覧の型情報
export type tweetsData = { tweets: tweetData[] };
// tweetの型情報
export type tweetData = {
  id: string; // tweetを一意に識別するためのid
  tweetInfo: tweetInfo; // tweet情報の型
  tweetContent: tweetContent; // tweet内容の型
  tweetUserAction: userAction; // tweetに対するユーザーのアクションの型
  userId: string; // tweet作成したユーザーのID
}

export type tweetInfo = {
  userName: string; // ユーザー名
  createdAt: string; // ツイート作成日時
}

export type tweetContent = {
  message: string; // ツイートのメッセージ
  imgName: string; // ツイートに添付した画像の名称
}

export type userAction = {
  good: number; // いいね
  comments: string[]; // ツイートに対するコメント
};