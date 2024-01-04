interface NewTypeFormProps {
  value: string;
  updateText: (str: string) => void;
  handleAction: () => void;
}
const NewTodoForm: React.FC<NewTypeFormProps> = ({
  value,
  updateText,
  handleAction,
}) => {
  return (
    <label>
      <input
        placeholder="new type"
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />

      <button onClick={handleAction}>Add type</button>
    </label>
  );
};

export default NewTodoForm;
