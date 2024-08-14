// export function CateAndStock({ product }) {
//   let EnStock;
//   for (let i = 0; i < product.length; i++) {
//     const style = product[i].stocked ? (
//       <li>Il en reste</li>
//     ) : (
//       <li>Il y en a plus en stock</li>
//     );

//     console.log(product[i].category);

//     if (product[i].stocked === true) {
//       EnStock = "Il en reste";
//     } else {
//       EnStock = "Il y en a plus en stock";
//     }
//     let number = 0;

//     return (
//       <>
//         {product.map((e) => (
//           <ul style={{ listStyle: "none", display: "flex" }}>
//             <li key={e.name}> {e.name}</li>,<li key={e.price}> {style} </li>
//           </ul>
//         ))}
//       </>
//     );
//   }
// }
