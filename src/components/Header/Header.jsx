import './Header.css';


const arr=["Important", "Foundational", "Amazing"];
let value=Math.floor( Math.random()*arr.length);

const mg=
["src/assets/react-core-concepts.png",
"src/assets/state-mgmt.png",
"src/assets/components.png",
 "src/assets/config.png",
 "src/assets/jsx-ui.png"];

let val=Math.floor(Math.random()*mg.length);

export default function Header()
{
  return (

<header>
        <img src={mg[val]} alt="Stylized atom" />
        <h1>Jena's React.js</h1>
        <p>
          {arr[value]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>

  );
}