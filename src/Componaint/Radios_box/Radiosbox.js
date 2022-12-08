import "./Radiosbox.css"



const Radiosbox = (props) => {
  return (
    <>
     <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    {props.class}
  </label>
</div>

    
          </>      
    
  )
}

export default Radiosbox

