import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { Checkbox } from './components/form/checbox';
import { InputText } from './components/Textinputt';
const PRODUCTS = [  
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]



function App() {




return <div className="container">
  <SearBar/>
</div>
}
function SearBar() {  
  const [Check , SetCheck] = useState(false)
return <div >
  <div >
 <InputText value = "" onchange={() => null} placeholder = "Rechercher"/>
    <Checkbox checked={Check} onchange={() => null} label= "rien"/>
  </div>
</div>
}
export default App
