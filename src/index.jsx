import "./styles.css"

import page from './dom/test'

// mount
const app = document.querySelector('#app')
app.replaceChild(page, app.firstChild)
