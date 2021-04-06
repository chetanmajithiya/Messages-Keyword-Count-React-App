export const splitAllWordsFromTextIntoArray = (textArray) => {
  let allWords = []

  textArray.map((text) => {
    const str = text
    // removing special character from string like abc's test#s
    const removeSpecialChars = str.replace(/[^a-zA-Z ]/g, ' ')
    // split string into array of words with space and multi spaces
    const wordsArray = removeSpecialChars.split(/\s+/)
    allWords = [...allWords, ...wordsArray]
    return true
  })
  return allWords
}

export const countWordsFromArray = (arr, word) => {
  const allMatch = arr.filter((text) => text.toLowerCase() === word.toLowerCase())
  return allMatch.length
}
