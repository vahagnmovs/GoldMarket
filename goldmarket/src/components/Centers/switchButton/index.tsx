
interface switchButtonProps {
  checked: boolean;
  handleCeckid: () => void;
}

const SwitchButton = ({ checked, handleCeckid }: switchButtonProps) => {
  return (
    <div className="switch_content   align-center">
      <span>Collections</span>
      <label className="switch">
        <input
          type="checkbox"
            //TODO: look
          onChange={() => handleCeckid()}
        />
          //TODO: change
          <span className={checked ? "slider" : "slider activ"}></span>
      </label>
      <span className={checked ? "" : "red"}>Shopping centers</span>
    </div>
  );
};

export default SwitchButton;
