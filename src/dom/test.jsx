/** @jsx createElement */
import { createElement } from "./createElement";

const handleClick = () => alert('somebody clicked!')

export default (
  <main>
    <h1 onClick={handleClick}>Hello from dom!</h1>
    <div>
      We use the same configuration as Parcel to bundle this sandbox, you can
      find more info about Parcel
      <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">
        here
      </a>
      .
    </div>
  </main>
);
