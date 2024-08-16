import { useState } from "react";
import reactLogo from "./assets/react.svg";
function affiche(params) {
  const Event = document.querySelector(".result");
  console.log(Event);
  Event.innerHTML = PRODUCTS.filter((element) =>
    element.name.toLowerCase().includes("f")
  )
    .map(
      (element) =>
        `

        <li>${element.name}</li>

  `
    )
    .join(" ");
}

import { Checkbox } from "./components/checbox";
import { InputText } from "./components/Textinputt";
import { ProductTow } from "./components/form/ProductRow";

import { ProductsCate } from "./components/form/ProductsCate";
// import { CateAndStock } from "./components/form/CateAndStock";

// import style from "./components/Textinputt/result"
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$6", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$5", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$12", stocked: true, name: "Peas" },
];

function App() {
  const [stockedD, SetStockedD] = useState(false);
  const [search, Setsearch] = useState("");

  if (stockedD == true) {
    affiche();
  }
  return (
    <>
      <SearBar
        stocked={stockedD}
        onststockchange={SetStockedD}
        Search={search}
        OnSearChange={Setsearch}
      />
      <ProductTable Products={PRODUCTS} />
    </>
  );
}

function ProductTable({ Products }) {
  const rows = [];
  // console.log(rows);

  let lastCategory = null;

  for (let product of Products) {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductsCate key={product.category} name={product.category} />
      );
    }
    lastCategory = product.category;
    rows.push(<ProductTow product={product} key={product.name} />);
  }

  return (
    <table>
      <thead>
        <tr>
          <th> nom </th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearBar({ showStockedOnly, onststockchange, OnSearChange, Search }) {
  const [Check, SetCheck] = useState(false);

  const [value, setValue] = useState("");

  return (
    <div style={{ marginBottom: "20px" }}>
      <InputText
        value={Search}
        placeholder="Rechercher"
        onChange={OnSearChange}
        className={"result"}
      />
      <Checkbox
        id={"stocked"}
        checked={showStockedOnly}
        onChange={onststockchange}
        label={"n'afficher que les produits en stock"}
      />
    </div>
  );
}
export default App;
// });
// const PRODUCTS = [
//   { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
//   { category: "Fruits", price: "$6", stocked: true, name: "Dragonfruit" },
//   { category: "Fruits", price: "$5", stocked: false, name: "Passionfruit" },
//   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
//   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
//   { category: "Vegetables", price: "$12", stocked: true, name: "Peas" },
// ];

// const input = document.querySelector("input");
// const affichage = document.getElementById("result");

// console.log(affichage);
// let valeur;
// input.addEventListener("input", (e) => {
//   valeur = e.target.value;
//   affiche();
// });

// function affiche(params) {
//   affichage.innerHTML = PRODUCTS.filter((element) =>
//     element.name.toLowerCase().includes(valeur)
//   )
//     .map(
//       (element) =>
//         `<li>${element.name}</li>
//   `
//     )
//     .join(" ");
// }
// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });
