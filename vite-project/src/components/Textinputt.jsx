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
      <ul className="result"></ul>
    </div>
  );
}
