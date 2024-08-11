export function Checkbox({ checked, onChange, label, id }) {
  return (
    <div className="form-check">
      <input
        id={id}
        type="checkbox"
        className="form-checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
      />

      <label htmlFor={id}> {label} </label>
    </div>
  );
}
