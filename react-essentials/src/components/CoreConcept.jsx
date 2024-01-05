// object destructuring can be used to pass props as parameters. In the parameter list of a component function opening and closing curly braces are used to destructure the first parameter of the function, which is the props parameter

// eslint-disable-next-line react/prop-types
export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
