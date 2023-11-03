//word_frequency

const { makeWordList } = require("../../functions/makeWordList/makeWordList");
const { sendResponse } = require("../../responses/sendResponse");

exports.handler = async (event, context) => {
    const wordList = makeWordList(event);
    
    var wordFrequencies = {};
    
    wordList.forEach(word => {
        
        if (word in wordFrequencies) {
            wordFrequencies[word]++;
        }
        else {
            wordFrequencies[word] = 1;
        }
    });

    return sendResponse(200, {
        wordFrequencies: wordFrequencies
    })
}