export function InputText({ placeholder, value, onChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="form-control"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
