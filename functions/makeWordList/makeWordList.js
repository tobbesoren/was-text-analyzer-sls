function makeWordList(event) {
    const textBody = JSON.parse(event.body);
    const textString = textBody.text;

    const wordList = textString
        .toLowerCase()
        .replace(/[^a-z0-9åäö -]/g, "")
        .trim()
        .split(/\s+/);

    return wordList;
}

module.exports = { makeWordList };