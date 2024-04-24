import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import DATA from "./data.json"
function App() {
const [jobs, setJobs] = useState(()=>{
 let jobS = []
 DATA.forEach(dat=>{
  jobS.push(dat)
 })

 return jobS
});

const testJob = jobs[0]


console.log(testJob)
  return <>
  <img src="/images/bg-header-desktop.svg" alt="" className='headerBg' />

  <main>
    <div className="jobs">
      {/*JOBS*/}

      {jobs.map(job=>{
            return <div className="job">
             {/*profile*/}
             <img src={job.logo} alt="prof" className='prof' />
             {/*middle stuff*/}
             <div className="mid">
               <div className="top">
                 <span className='company'>{job.company}</span>
                 {job.new && <span className='new'>{job.new?"NEW!":" "}</span>}
                 {job.featured ? <span className='featured'>{job.featured?"FEATURED":" "}</span>: <div></div>}
               </div>
               <div className="middle">
                 <span className='position'>{job.position}</span>
               </div>
               {/*bottom ig */}
                 <ul>
                 <li style={{listStyle: 'none'}} className='posted'>{job.postedAt}</li>
                 <li className='contract'>{job.contract}</li>
                 <li className='location'>{job.location}</li>
                 </ul>
             </div>
     
             {/*end stuff*/}
     
             <div className="end">
               <div className="cats">
                 <div className="cat">
                   {job.role}
                 </div>
                 <div className="cat">
                   {job.level}
                 </div>
                 {job.languages.map(lang=>{
                   return <div className="cat">
                     {lang}
                   </div>
                 })}
               </div>
             </div>
           </div>
      })}






    </div>
    </main>  
  </>
}

export default App