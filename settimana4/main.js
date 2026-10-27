const titolo = document.querySelector('#titolo')
const bottone = document.querySelector('#bottone')
const ripristina = document.querySelector('#ripristina')

// salvo il testo iniziale prima di toccarlo
const testoIniziale = titolo.textContent

ripristina.addEventListener('click', () => {
  titolo.textContent = testoIniziale
})

bottone.addEventListener('click', () => {
  const attivo = titolo.classList.toggle('evidenziato')
  bottone.textContent = attivo ? 'Togli evidenza' : 'Evidenzia'
})

const colori = ['#F7D6E0', '#D6F7E4', '#D6E4F7', '#F7EFD6', '#E8D6F7']
const bottoneColore = document.querySelector('#colore')

bottoneColore.addEventListener('click', () => {
  const i = Math.floor(Math.random() * colori.length)
  document.body.style.background = colori[i]
})

const campo = document.querySelector('#campo')
const aggiungi = document.querySelector('#aggiungi')
const lista = document.querySelector('#lista')
const conteggio = document.querySelector('#conteggio')

// una sola funzione, chiamata da tutti e due i gestori
const aggiornaConteggio = () => {
  const n = lista.querySelectorAll('li').length
  conteggio.textContent = `Voci: ${n}`
}

aggiungi.addEventListener('click', () => {
  const testo = campo.value.trim()
  if (testo === '') return

  const li = document.createElement('li')
  li.textContent = testo
  lista.appendChild(li)

  campo.value = ''
  aggiornaConteggio()
})

// un listener solo, sul contenitore
lista.addEventListener('click', (e) => {
  if (e.target.tagName !== 'LI') return
  e.target.remove()
  aggiornaConteggio()
})