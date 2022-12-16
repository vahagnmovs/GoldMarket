interface ISwitchButtonProps {
  checked: boolean;
  handleCeckid: () => void;
}

const SwitchButton = ({ checked, handleCeckid }: ISwitchButtonProps) => {
  return (
      <div className="switch_content flex  align-center justify-center">
          <span >Collections</span>

          <div>
              <input onChange={() => handleCeckid()} type="checkbox" className="checkbox" id="checkbox"/>
              <label htmlFor="checkbox" className="label">
                  <i className="fas fa-moon"></i>
                  <i className='fas fa-sun'></i>
                  <div className='ball'/>
                  <span className={checked ? "slider" : "slider_activ"}></span>
              </label>
          </div>
          <span className={checked ? "" : "red"}>Shopping centers</span>
      </div>
  );
};

export default SwitchButton;
