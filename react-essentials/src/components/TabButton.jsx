// A component will always get a specila built-in children prop by React. This is set by React. This children prop simply refers to the content between the opening and closing Component tags

// eslint-disable-next-line react/prop-types
export default function TabButton({ children, onSelect, isSelected }) {
  // Add a click event listener to the button by adding a special prop to it. The value for these props is a function because we would want to point at a function that should be executed when that event occurs. The advantage of defining these event handler functions inside the component function is that they have access to the component's props and state. The convention is to name the function as handleEvent or eventHandler().

  // Props that should in the end receive a function that will be triggered upon an event, should start with 'on'

  return (
    <li>
      <button className={isSelected ? 'active' : ''} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
