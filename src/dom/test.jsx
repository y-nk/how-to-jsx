/** @jsx createElement */
/** @jsxFrag FRAGMENT */
import { createElement, FRAGMENT } from "./createElement";

const handleClick = () => alert('somebody clicked!')

const todo = [
  { label: 'implement children', state: 'done' },
  { label: 'implement attributes', state: 'done' },
  { label: 'implement event handlers', state: 'done' },
  { label: 'implement iteration', state: 'done' },
  { label: 'implement custom components', state: 'done' },
  { label: 'implement fragments', state: 'done' },
];

const Button = ({ name, onClick, children }) => (
  <button title={name} onClick={onClick}>
    {children}
  </button>
);

export default (
  <>
    <h1>Hello from dom!</h1>
    <div>
      We use the same configuration as Parcel to bundle this sandbox, you can
      find more info about Parcel
      <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">
        here
      </a>
      .

      <h2>Todo list</h2>
      <ul>
        {todo.map(({ label, state }) => (<li class={state}>{label}</li>))}
      </ul>

      <Button name="im a button" onClick={handleClick}>
        click me!
      </Button>
    </div>
  </>
);
