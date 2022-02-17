import React,{useState} from "react";


function ScheduleService({uploadJob}) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    telephone: "",
    subject: "",
    servicejobs:"",
    message: "",

  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    console.log("onSubmit triggered");
    e.preventDefault();
    uploadJob(formData);
    e.target.reset();
  };


  return (
    <div>
     
      <form style={{ display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center"}} onSubmit={onSubmit}>
     
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  style={{ display: "flex", justifyContent: "center"}}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Last Name </label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  style={{ display: "flex", justifyContent: "center"}}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  style={{ display: "flex", justifyContent: "center"}}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Telephone </label>
                <input
                  type="text"
                  name="telephone"
                  placeholder="Telephone"
                  style={{ display: "flex", justifyContent: "center"}}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Subject </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  style={{ display: "flex", justifyContent: "center"}}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Service Jobs: </label>
                <select name="servicejobs"onChange={handleChange}>
                <option name="installation" onChange={handleChange}>installation</option>
                <option name="replacement" onChange={handleChange}>replacement</option>
                <option name="ac-repair" onChange={handleChange}>ac-repair</option>
                <option name="ac-service" onChange={handleChange}>ac-service</option>
                <option name="heater-repair" onChange={handleChange}>heater-repair</option>
                <option name="heater-service" onChange={handleChange}>heater-service</option>
                <option name="air-duct-cleaning" onChange={handleChange}>air-duct-cleaning</option>
                <option name="other" onChange={handleChange}>other</option>
                </select>
                {/* <input type="checkbox" name="installation" placeholder="installation" value="installation" onChange={handleChange} /> Installation
                <input type="checkbox" name="replacement" placeholder="replacement" value="replacement" onChange={handleChange}/> Replacement
                <input type="checkbox" name="ac-repair" placeholder="ac-repair" value="ac-repair" onChange={handleChange}/> AC Repair
                <input type="checkbox" name="ac-service" placeholder="ac-service" value="ac-service" onChange={handleChange}/> AC Service
                <input type="checkbox" name="heater-repair" placeholder="heater-repair" value="heater-repair"onChange={handleChange} /> Heater Repair
                <input type="checkbox" name="heater-service" placeholder="heater-service" value="heater-service"onChange={handleChange} /> Heater Service
                <input type="checkbox" name="air-duct-cleaning" placeholder="air-duct-cleaning" value="air-duct-cleaning" onChange={handleChange} /> Air Duct Cleaning
                <input type="checkbox" name="other" placeholder="other" value="other" onChange={handleChange}/> Other */}
              </div>
              <div>
                <label style={{display: "flex", alignItems: "center", justifyContent: "center"}}>Message </label>
                <input
                  type="text" 
                  name="message"
                  placeholder="Message"
                  style= {{width:"300px", height: "300px"}}
                  onChange={handleChange}
                />
                
              </div>
              
              <button className="button" type="submit" style={{display: "flex", justifyContent: "center", height: "50px", width: "300px", marginTop: "5px", alignItems: "center", backgroundColor: "orange"}}>
              Send Message
            </button>
          </form>

    </div>
  );
}

export default ScheduleService;