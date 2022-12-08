import "./Check_box.css";

const Check_box = (props) => {
  return (
    <>
 
        <div className="form-check">
   <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
   <label className="form-check-label" htmlFor="flexCheckDefault">
   {props.sub}
 </label>
                                  
                                  
</div> 
    </>
  )
}

export default Check_box
