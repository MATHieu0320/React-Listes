export function Checkbox({checked,onChange,label}) {
    return <div className="form-check">
       
        <input type="checkbox" 
        className="form-checkbox" 
        checked = {checked} 
        onChange = {(e) => onChange(e.target.value)} />
   
     <label className="form-label"> {label} </label>
      </div>
}