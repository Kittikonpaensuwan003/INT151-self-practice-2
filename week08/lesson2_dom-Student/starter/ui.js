import { addQuote, deleteQuote, updateQuote, getAllQuotes } from './quote.js'
// Step 1: Create an array to hold quote objects


// Step 2: Select the DOM element where quotes will be rendered
const quoteList = document.getElementById('quote-list')

// Step 3: Define a function called renderQuotes()
// This function should:
// - Clear the quoteList element
// - Loop through the quotes array
// - For each quote, create a <p> element with content and author
// - Append each <p> to quoteList
function renderQuotes() {
    if (!quoteList) return

  const all = getAllQuotes() || []
  quoteList.innerHTML = ''

  if (!all.length) {
    const p = document.createElement('p')
    p.textContent = 'Quotes is empty.'
    quoteList.appendChild(p)
    return
  }

  const frag = document.createDocumentFragment()
  for (const q of all) {
    const p = document.createElement('p')
    p.className = 'quote-item'
    p.textContent = q.author ? `${q.content} — ${q.author}` : q.content
    frag.appendChild(p)
  }
  quoteList.appendChild(frag)
}

// Step 4: Add test quotes manually and call renderQuotes()
// Example:
// addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
// renderQuotes();
addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
addQuote('Yak pai ha mia', 'Gongyuro')
addQuote('Maiwai leaw', 'Armminho')

renderQuotes();