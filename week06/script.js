// Lesson 1: Arrays, Objects, and Function
// 1. Create an empty array to hold the quotes
const quotes = []

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  // TODO: Add the quote object to the quotes array
  const add = {
    id: quote.id,
    content: quote.content,
    author: quote.author 
  }
  quotes.push(add);
}

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  // TODO: Remove the quote object from the array using the given id
  const findId = quotes.findIndex( i => i.id === id)
  if(findId !== -1) quotes.splice(findId, 1)
}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  // TODO: Find the quote by id and update its properties
  const findId = quotes.findIndex( i => i.id === id)
  if( findId !== -1){
    quotes[findId] = { ...quotes[findId], ...updatedQuote }
  }
}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  // TODO: Return the quotes array
  console.log(quotes)
}

// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()
addQuote({id : 1 , content : "Book" , author : "Armminho"})
addQuote({id : 1 , content : "Video" , author : "Gongyu"})
addQuote({id : 1 , content : "Game" , author : "BB"})
// TODO: Delete 1 quote using deleteQuote()
deleteQuote(3)
// TODO: Update 1 quote using updateQuote()
updateQuote(2,{ content : "Eat" },{ author : "Armminho"})
// TODO: Print all quotes using getAllQuotes()
getAllQuotes()