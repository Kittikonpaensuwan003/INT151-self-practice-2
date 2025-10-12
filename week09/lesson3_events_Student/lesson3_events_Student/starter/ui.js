import { addQuote, deleteQuote, updateQuote, getAllQuotes } from './quote.js'
// Lesson 3 - Events Starter

let quotes = []

// Select DOM elements
const quoteList = document.getElementById('quote-list')   
const form = document.getElementById('quoteForm')   
const contentInput = document.getElementById('content')  
const authorInput = document.getElementById('author') 
const idInput = document.getElementById('quoteId')
const randomBtn = document.getElementById('randomBtn')
const randomDisplay = document.getElementById('randomQuoteDisplay')

function createQuoteElement(quote) {
  const div = document.createElement('div')
  div.dataset.id = String(quote.id)

  const content = document.createElement('p')
  content.textContent = quote.content

  const author = document.createElement('p')
  author.textContent = quote.author

  const editBtn = document.createElement('button')
  editBtn.className = 'edit-btn'
  editBtn.dataset.id = String(quote.id)
  editBtn.type = 'button'
  editBtn.textContent = 'Edit'

  const delBtn = document.createElement('button')
  delBtn.className = 'delete-btn'
  delBtn.dataset.id = String(quote.id)
  delBtn.type = 'button'
  delBtn.textContent = 'Delete'

  div.append(content, author, editBtn, delBtn)
  return div
}

function clearList() {
  quoteList.innerHTML = ''
}

// Add, edit, delete quote functions

function addQuoteToDOM(quote) {
  const el = createQuoteElement(quote)
  quoteList.appendChild(el)
}

function updateQuoteInDOM(quote) {
  const el = quoteList.querySelector(`div[data-id="${quote.id}"]`)
  if (!el) return
  const ps = el.getElementsByTagName('p')
  if (ps[0]) ps[0].textContent = quote.content
  if (ps[1]) ps[1].textContent = quote.author
}

function deleteQuoteFromDOM(id) {
  const el = quoteList.querySelector(`div[data-id="${id}"]`)
  if (el && el.parentNode) el.parentNode.removeChild(el)
}

function renderQuotes() {
  quotes = getAllQuotes() 
  clearList()
  if (!quotes.length) {
    const p = document.createElement('p')
    p.textContent = 'Quotes is empty.'
    quoteList.appendChild(p)
    return
  }

  const fragment = document.createDocumentFragment()

  for (const q of quotes) fragment.appendChild(createQuoteElement(q))
  quoteList.appendChild(fragment)
}

function showRandomQuote() {
  const list = getAllQuotes() 
  randomDisplay.textContent = ''

  if (!list.length) {
    randomDisplay.textContent = 'No quotes to show.'
    return
  }

  const rand = list[Math.floor(Math.random() * list.length)]
  randomDisplay.textContent = rand.author
    ? `"${rand.content}" — ${rand.author}`
    : `"${rand.content}"`
}

// Event listeners for form submission, edit, and delete clicks

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const content = contentInput.value.trim()
  const author  = authorInput.value.trim()
  const idRaw   = idInput.value.trim()

  if (!content || !author) return 

  if (idRaw) {
    const id = Number(idRaw)
    const updated = updateQuote(id, content, author) 
    if (updated) {
      updateQuoteInDOM(updated)
    } else {
      renderQuotes()
    }
  } else {
    const created = addQuote(content, author) 
    if (created) addQuoteToDOM(created)
  }

  form.reset()
  idInput.value = ''
  contentInput.focus()
})

quoteList.addEventListener('click', (e) => {
  const target = e.target
  if (!(target instanceof HTMLElement)) return

  if (target.classList.contains('edit-btn')) {
    const id = Number(target.dataset.id)
    const current = getAllQuotes().find(q => q.id === id) 
    if (current) {
      idInput.value = String(current.id)
      contentInput.value = current.content
      authorInput.value = current.author
      contentInput.focus()
    }
    return
  }

  if (target.classList.contains('delete-btn')) {
    const id = Number(target.dataset.id)
    const idx = deleteQuote(id) 
    if (idx !== -1) {
      deleteQuoteFromDOM(id)
      if (!getAllQuotes().length) renderQuotes()
    }
  }
})

randomBtn.addEventListener('click', showRandomQuote) 

renderQuotes()