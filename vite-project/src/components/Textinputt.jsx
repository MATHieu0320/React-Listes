export function InputText({ placeholder, value, onChange, className }) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="form-control"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <ul className={className}></ul>
    </div>
  );
}
