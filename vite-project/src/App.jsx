import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { Checkbox } from "./components/checbox";
import { InputText } from "./components/Textinputt";
import { ProductTow } from "./components/form/ProductRow";

import { ProductsCate } from "./components/form/ProductsCate";
// import { CateAndStock } from "./components/form/CateAndStock";
import { Fragment } from "react";

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
  return (
    <Fragment>
      <SearBar
        stocked={stockedD}
        onststockchange={SetStockedD}
        Search={search}
        OnSearChange={Setsearch}
      />
      <ProductTable Products={PRODUCTS} />
    </Fragment>
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
  const htm = document.querySelector(".result");
  const [value, setValue] = useState("");
  console.log(htmTYNB);

  htm = PRODUCTS.filter((element) => {
    element.category.includes(Search);
    // console.log(element.category);
  }).map((element) => {
    `<h4>${element.category} </h4>`;
  });
  // function handleChange(e) {
  //   setValue(e);
  //   console.log(value);
  // }
  // function ChangeCheck() {
  //   for (let i = 0; i < PRODUCTS.length; i++) {
  //     if (PRODUCTS.stocked === true) {
  //       console.log(PRODUCTS);
  //     }
  //   }
  //   SetCheck(!Check);
  // }

  return (
    <div style={{ marginBottom: "20px" }}>
      <InputText
        value={Search}
        placeholder="Rechercher"
        onChange={OnSearChange}
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
