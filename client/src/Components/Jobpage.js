import React from "react";

function Jobpage({newJobs}) {
    return (
        <div>
 {newJobs.map((job) => (
     <div key={job.id}>
     <p>{job.firstname}</p>
     <p>{job.lastname}</p>
     <p>{job.email}</p>
     <p>{job.telephone}</p>
     <p>{job.subject}</p>
     <p>{job.servicejob}</p>
     <p>{job.message}</p>
     </div>
 ))}
        </div>
    );
  }
  
  export default Jobpage;
  