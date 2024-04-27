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


const [filters, setFilters] = useState([])
const [isFiltering, setIsFiltering] = useState(false)
const [filteredList, setFilteredList] = useState([])
/*functions*/
function handleFilter(filter){

  setIsFiltering(true)
  let newFilteredList = []
  /*change the filtered list broski!*/
  let langExists = false
  /*jobs.forEach(job=>{
    let langs = job.languages
    for(let i=0; i<langs.length; i++){
      if(filter===langs[i]){
        newFilteredList.push(job)
      }
    }
  })*/
  


  jobs.forEach(job=>{
    //check languages
    let langs = job.languages
 

    for(let i=0; i<(filters.length!=0?filters.length:1); i++){
      if(filters.length===0){
        if(job.role===filter || job.level===filter){
        
          newFilteredList.push(job)
          //console.log(job)
          console.log("i ran")
        }
      }else{
        if(job.role===filters[i] || job.level===filters[i]){
            //if the job isnt in the list already, add it
          for(let j=0; j<newFilteredList.length; j++){
            if(newFilteredList[j]!=job){
              newFilteredList.push(job)
            }
          }
          console.log("i also ran")
          
          //console.log(job)
        }
      }
    }

    for(let i=0; i<langs.length; i++){
      if(filter===langs[i]){
        newFilteredList.push(job)
      }
    }

    /*change the filtered list broski!*/
    /*for(let i=0; i<(filters.length!=0?filters.length:3); i++){
    
    }*/
  })
  setFilteredList(newFilteredList)
  /*console.log(newFilteredList)*/
  let isIn = false
  //if its in dont run lmao*/
  if(filters.length<8 && filters.length!=0){
    for(let i=0; i<filters.length; i++){
      if(filters[i]===filter){
        isIn = true
        console.log("its in, genius...smh", isIn)
      }
    }

    if(!isIn){
      setFilters([...filters, filter])
    }

  }else if (filters.length!=8){
    setFilters([...filters, filter])
  }
  
  

}


function handleDelete(index){
  setFilters(filters.filter(filter=>filter!=filters[index]))
  if(filters.length===1){
    setIsFiltering(false)
  }
  //console.log(index)
}

function handleClear(){
  setFilters([])
  setIsFiltering(false)
}


//functions



//const testJob = jobs[0]


//console.log(testJob)
  return <>
  <img src="/images/bg-header-desktop.svg" alt="" className='headerBg' />
 
  <main>
  {filters.length > 0 &&  <div className="filterCont">
    <div className="filters">
   {filters.map((filter, index)=>{
    return  <div className="filter" >
    <span className="left">
      {filter}
    </span>
    <img src="public\images\icon-remove.svg" alt="x" className="right" onClick={()=>{handleDelete(index)}} />
  </div>
   })}
    </div>
    <span className="clear" onClick={handleClear}>
      Clear
    </span>
  </div> }
    <div className="jobs">
      {/*JOBS*/}

      {(isFiltering?filteredList:jobs).map(job=>{
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
                 <div className="cat" onClick={()=>handleFilter(job.role)}>
                   {job.role}
                 </div>
                 <div className="cat" onClick={()=>handleFilter(job.level)}>
                   {job.level}
                 </div>
                 {job.languages.map(lang=>{
                   return <div className="cat" onClick={()=>handleFilter(lang)}>
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