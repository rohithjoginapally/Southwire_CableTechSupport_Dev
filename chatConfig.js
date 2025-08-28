// import { chatConfig, chatWindow } from 'kore-web-sdk';

var chatConfig = KoreChatSDK.chatConfig;
let botOptions=chatConfig.botOptions;
	
 botOptions.JWTUrl = "https://mk2r2rmj21.execute-api.us-east-1.amazonaws.com/dev/users/sts";
 botOptions.userIdentity = 'rohithj@pronixinc.com';
 botOptions.botInfo = { name: "Southwire’s CableTechSupport™ Services’ Re3™ Chatbot", "_id": "st-4ad03619-ea5d-5f8d-b807-ec12c8e9032d" };
 botOptions.clientId = "cs-12455619-79ad-5225-8841-02b6e722dbd4";
 botOptions.clientSecret = "IYNA709fsWr1UsjvDr40T6X9Sy1JNQ2UUkxNEQaxSCI=";

var chatWindowInstance = new chatWindow(chatConfig);
chatWindowInstance.show(chatConfig);
