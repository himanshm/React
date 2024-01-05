import './Header.css';
import reactImg from '../../assets/react-core-concepts.png';
// the variable reactImg will include an automatically generated path that will also work once you deploy the React app to a server.

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

const genRandomInt = function (max) {
  return Math.floor(Math.random() * (max + 1));
};

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt='Stylized atom' />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
