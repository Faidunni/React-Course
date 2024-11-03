import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

// props is an object that contains all the properties passed to the component
// function CoreConcepts(props) {
//   return (
//     <li>
//       <img src={props.img} alt="..." />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />

        {/* props children */}
      </main>
    </>
  );
}

export default App;
