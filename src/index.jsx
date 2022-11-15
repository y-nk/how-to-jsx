/** @jsx createElement */
import { createElement } from "./dom/createElement";

import "./styles.css"

import Page from './dom/test'

// mount
const app = document.querySelector('#app')
app.replaceChild(<Page />, app.firstChild)
