/** @jsx createElement */
import { createElement } from "./dom/createElement";

import "./styles.css"

const page = <div>hello world</div>

// mount
const app = document.querySelector('#app')
app.replaceChild(page, app.firstChild)
