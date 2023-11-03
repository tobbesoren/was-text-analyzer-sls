//summary

const { sendResponse } = require("../../responses/sendResponse");
const { makeWordList } = require("../../functions/makeWordList/makeWordList");

exports.handler = async (event, context) => {
    
    const wordList = makeWordList(event);
    
    return sendResponse(200, {
        NumberOfWords: wordList.length,
        wordList: wordList
    });
}