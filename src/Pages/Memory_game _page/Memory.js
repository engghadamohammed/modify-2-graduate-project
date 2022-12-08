
import "./Memory.css"
import { Imagedata, Worddata } from "../../Componaint/index"

const Memory = () =>
{
  return (
    <>
      <div className="container  mb-5 mt-5 rounded main_ifo">
        <div className="Add_photo">
          <h3 className="header_info mb-4">Add Data</h3>
          <div className="row mb-5 ">
            <div className=" mb-5 col-lg-4 col-md-6 col-sm-12">
              
              <Imagedata />
            </div>
           
            <div className=" mb-5 col-lg-4 col-md-6 col-sm-12">
              
              <Imagedata />
            </div>
           
            <div className="mb-5 col-lg-4 col-md-6 col-sm-12">
              
              <Imagedata />
            </div>
           
            <div className=" mb-5 col-lg-4 col-md-6 col-sm-12">
              
              <Imagedata />
            </div>
           
            <div className="mb-5 col-lg-4 col-md-6 col-sm-12">
              
              <Imagedata />
            </div>
           
            <div className="mb-5 col-lg-4 col-md-6 col-sm-12">
              
              <Imagedata />
            </div>
          </div>
          
          <div className=" mb-5 row">
            <div className=" mb-5 col-lg-4 col-md-6 col-sm-12">
              <Worddata type="Word Image One" />
            </div>
            <div className="mb-5  col-lg-4 col-md-6 col-sm-12">
              <Worddata type="Word Image two" />
            </div>
            <div className="mb-5   col-lg-4 col-md-6 col-sm-12">
              <Worddata type="Word Image three" />
            </div>
            <div className="mb-5   col-lg-4 col-md-6 col-sm-12">
              <Worddata type="Word Image four" />
            </div>
            <div className="mb-5   col-lg-4 col-md-6 col-sm-12">
              <Worddata type="Word Image five" />
            </div>
            <div className="mb-5   col-lg-4 col-md-6 col-sm-12">
              <Worddata type="Word Image six" />
            </div>

            
          </div>
  
        </div>
  
      </div>
    </>
  )
  
}
export default Memory