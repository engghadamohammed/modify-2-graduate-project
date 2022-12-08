import "./Forminfo.css";
import { Checkbox, Radiosbox ,Button} from "../../Componaint/index";

const Forminfo = () => {
  return (
    <>
      <form>
      <div className="container mb-5 mt-5 rounded main_ifo ">
        <div className="header_info mb-4">Information:-</div>
        <div className="row form_inf justify-content-md-center ">
          <div className=" col-lg-10 col-md-12 col-sm-12 ">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="quadrant name please"
              />
            </div>
          </div>
        </div>
        <div className=" m-5 row justify-content-md-center  ">
          <div className="Check_box col rounded-3  ">
            <h5>Choose Subject</h5>
            <Checkbox sub="English" />
            <Checkbox sub="Arabic" />
            <Checkbox sub="Math" />
            <Checkbox sub="Fransh" />
          </div>
          <div className="Radios col rounded-3  ">
            <h5>Choose Class</h5>
            <Radiosbox class="First" />
            <Radiosbox class="Second" />
            <Radiosbox class="Thrid" />
            <Radiosbox class="Fourth" />
          </div>
        </div>
        <div >
        
          <Button />
        </div>
      </div>
      </form>  
      
    </>
  );
};

export default Forminfo;
