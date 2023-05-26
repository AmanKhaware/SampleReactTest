interface Props {
  listHeading: string;
  listItems: string[];
}
import { MouseEvent, useState } from "react";
function ListGroup(props: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{props.listHeading}</h1>
      {props.listItems.length === 0 && <p>No other location are avaiable</p>}

      <ul className="list-group">
        {props.listItems.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

// import { MouseEvent, useState } from "react";
// function ListGroup() {
//   let items = ["Kolkata", "Delhi", "Mumbai", "Bangalore", "Chennai"];
//   const [selectedIndex, setSelectedIndex] = useState(-1);
//   return (
//     <>
//       <h1>Dynamic List</h1>
//       {items.length === 0 && <p>No Items is found in the list</p>}
//       <ul className="list-group">
//         {items.map((x, index) => (
//           <li
//             className={
//               selectedIndex === index
//                 ? "list-group-item active"
//                 : "list-group-item"
//             }
//             key={index}
//             onClick={() => setSelectedIndex(index)}
//           >
//             {x}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default ListGroup;

// ------------------------------------------------------------------------------------------------------------------------------
// function ListGroup(){
//     return(
//         <ul className="list-group">
//             <li className="list-group-item">An item</li>
//             <li className="list-group-item">A Second Item</li>
//             <li className="list-group-item">A third Item</li>
//             <li className="list-group-item">A fourth Item</li>
//             <li className="list-group-item">And a fifth item</li>
//         </ul>
//     )
// }

// export default ListGroup;

// function ListGroup() {
//   return (
//     <div>
//       <h1>My List Group</h1>
//       <ul className="list-group">
//         <li className="list-group-item">An item</li>
//         <li className="list-group-item">A second item</li>
//         <li className="list-group-item">A third item</li>
//         <li className="list-group-item">A fourth item</li>
//         <li className="list-group-item">And a fifth one</li>
//       </ul>
//     </div>
//   );
// }
// export default ListGroup;

// function ListGroup() {
//     return (
//       <Fragment>
//         <h1>My List Group</h1>
//         <ul className="list-group">
//           <li className="list-group-item">An item</li>
//           <li className="list-group-item">A second item</li>
//           <li className="list-group-item">A third item</li>
//           <li className="list-group-item">A fourth item</li>
//           <li className="list-group-item">And a fifth one</li>
//         </ul>
//         </Fragment>
//     );
//   }
//   export default ListGroup;

// function ListGroup() {
//   let items = ["Kolkata", "Delhi", "Mumbai", "Bangalore"];
//   // items = [];
//   return (
//     <>
//       <h1>My Dynamic list</h1>
//       {items.length === 0 && <p>No Items found in the list</p>}
//       <ul className="list-group">
//         {items.map((item) => (
//           <li
//             className="list-group-item"
//             key={item}
//             onClick={() => console.log("clicked")}
//           >
//             {item}
//           </li>
//         ))}
//         {/* <li className="list-group-item">{items[0]}</li>
//         <li className="list-group-item">{items[1]}</li>
//         <li className="list-group-item">{items[2]}</li>
//         <li className="list-group-item">{items[3]}</li> */}
//       </ul>
//     </>
//   );
// }
// export default ListGroup;

// function ListGroup() {
//   let items = ["Kolkata", "Delhi", "Mumbai", "Bangalore"];
//   const handleCheck = () => console.log("Clicked");

//   // items = [];
//   return (
//     <>
//       <h1>My Dynamic list</h1>
//       {items.length === 0 && <p>No Items found in the list</p>}
//       <ul className="list-group">
//         {items.map((item, index) => (
//           <li
//             className="list-group-item"
//             key={index}
//             // onClick={() => console.log(index + " " + item)}
//             onClick={() => console.log(index + " " + item)}
//           >
//             {item}
//           </li>
//         ))}
//         {/* <li className="list-group-item">{items[0]}</li>
//         <li className="list-group-item">{items[1]}</li>
//         <li className="list-group-item">{items[2]}</li>
//         <li className="list-group-item">{items[3]}</li> */}
//       </ul>
//     </>
//   );
// }
// export default ListGroup;

// import { MouseEvent } from "react";
// function ListGroup() {
//   let items = ["Kolkata", "Delhi", "Mumbai", "Bangalore", "Chennai"];
//   const handleClick = (event: MouseEvent) => console.log(event); //items = [];
//   return (
//     <>
//       <h1>Dynamic List</h1>
//       {items.length === 0 && <p>No Items is found in the list</p>}
//       <ul className="list-group">
//         {items.map((x, index) => (
//           <li className="list-group-item" key={index} onClick={handleClick}>
//             {x}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default ListGroup;
