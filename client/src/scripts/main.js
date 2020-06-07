const test = ['hey', 'hoy', 'hay']

function createCliche(text) {
  const p = document.createElement('p')
  p.innerHTML = text
  document.body.appendChild(p)
}

for (const text of test) {
  createCliche(text)
}
