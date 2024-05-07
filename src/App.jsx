import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import DATA from "./data.json"
function App() {
const [jobs, setJobs] = useState(()=>{
 let jobS = []
 /*DATA.forEach(dat=>{
  jobS.push(dat)
 })*/

 jobS =  DATA.map(dat=>{
  //make a new key-value pair called filters with the "filters"
  let langs = dat.languages //get the languages
  let filterS = [dat.level, dat.role] //create a mini filter, and add the neccessary stuff
  langs.forEach(lang=>{
    filterS.push(lang)//add all the languages to the mini filter
  })
  return {...dat, filters: filterS} //add said key-value pair to each object in the array
 })

 return jobS
});




const [filters, setFilters] = useState([])
const [isFiltering, setIsFiltering] = useState(false)
const [filteredList, setFilteredList] = useState(jobs)
/*functions*/
function handleFilter(filter, isLang){
  setIsFiltering(true)
  setFilteredList(jobs)
  let isIn = false
  let newFilteredList = []


  

  
  //check if the filter is already in the list
  for(let i=0; i<filters.length; i++){
    if(filters[i]===filter){
      isIn=true
    }
  }
  //addtofilterList
  if(!isIn && filter ){
    setFilters([...filters, filter])

    //actual filtering


    if(filters.length<1){
      jobs.forEach(job=>{
        let filterS = job.filters
       for(let i=0; i<filterS.length; i++){
        if(filter === filterS[i]){
          newFilteredList.push(job)
        }
       }
      })
      setFilteredList(newFilteredList)
    }



    if(filters.length>=1 && filter){
      filters.forEach(fil=>{
        newFilteredList = []
        for(let i=0; i<filteredList.length; i++){
          filteredList[i].filters.forEach(filt=>{
            if(filt===fil){
              newFilteredList.push(filteredList[i])
            }
          })
        }
        setFilteredList(newFilteredList)
      })
    }
   newFilteredList = []
    filteredList.forEach(job=>{
      let filterS = job.filters
     for(let i=0; i<filterS.length; i++){
      if(filter === filterS[i]){
        newFilteredList.push(job)
      }
     }
    })
    setFilteredList(newFilteredList)

  }


  
  if(!filter){
    filters.forEach((filter, index)=>{
      if(index===0){ //only run for the first one
        newFilteredList = [] 
        for(let i=0; i<jobs.length; i++){
          jobs[i].filters.forEach(filt=>{
            if(filt===filter){
              newFilteredList.push(jobs[i])
            }
          })
        }
        setFilteredList(newFilteredList)
      }

      if(index != filters.length-1 && index!=0){
        newFilteredList = []
        for(let i=0; i<filteredList.length; i++){
          filteredList[i].filters.forEach(filt=>{
            if(filt===filter){
              newFilteredList.push(filteredList[i])
            }
          })
        }
        setFilteredList(newFilteredList)
      }
      
    })
   }










 
}


function handleDelete(index, filter){
  setFilters(filters.filter(filter=>filter!=filters[index]))
  if(filters.length===1){
    setFilters([])
    setFilteredList(jobs)
    setIsFiltering(false)
  }

  
  let newFilteredList  = []
  if(filters.length>1){
    handleFilter() 
  }


 
}

function handleClear(){
  setFilters([])
  setIsFiltering(false)
  setFilteredList(jobs)
}


//functions



//const testJob = jobs[0]


//console.log(testJob)
/*console.log(prevList , "prevlist")*/
  return <>
  <div  alt="background" className='headerBg' />
 
  <main>
  {filters.length > 0 &&  <div className="filterCont">
    <div className="filters">
   {filters.map((filter, index)=>{
    return  <div className="filter" >
    <span className="left">
      {filter}
    </span>
    <img src="/images/icon-remove.svg" alt="x" className="right" onClick={()=>{handleDelete(index, filter)}} />
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
            return <> <img src={job.logo} alt="prof" className='mobileProf' /> <div className="job">
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
               {job.filters.map(filter=>{
                return <div className="cat" onClick={()=>handleFilter(filter)}>
                  {filter}
                </div>
               })}
               </div>
             </div>
           </div>
           </>
      })}






    </div>
    </main>  
  </>
}

export default App