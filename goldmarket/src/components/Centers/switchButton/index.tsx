
interface switchButtonProps {
  checked: boolean;
  handleCeckid: () => void;
}

const SwitchButton = ({ checked, handleCeckid }: switchButtonProps) => {
  return (
    <div className="button-contener">
      <span>Collections</span>
      <label className="switch">
        <input
          type="checkbox"
          onChange={() => handleCeckid()}
        />
        <span className={checked ? "slider" : "slider activ"}></span>
      </label>
      <span className={checked ? "" : "red"}>Shopping centers</span>
    </div>
  );
};

export default SwitchButton;
