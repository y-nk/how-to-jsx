/** @jsx createElement */
import { createElement } from "./dom/createElement";

import "./styles.css"

import DomPage from './dom/test'
import VDomPage from './vdom/test'

// mount
const app = document.querySelector('#app')
app.innerHTML = ''

app.appendChild(<DomPage />)
app.appendChild(
  <pre>
    <VDomPage />
  </pre>
)
