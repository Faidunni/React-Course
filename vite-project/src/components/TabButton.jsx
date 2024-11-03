// function TabButton(props) {
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
// }

function TabButton({ children, onSelect, isSelected }) {
  console.log("TabButton rendered");

  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
