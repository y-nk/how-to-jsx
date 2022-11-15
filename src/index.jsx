/** @jsx createElement */
import { createElement } from "./dom/createElement";

import "./styles.css"

const page = <div>hello world</div>
document.querySelector('#app').appendChild(page)
