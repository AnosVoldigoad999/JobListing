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
const [prevList, setPrevList] = useState([])
/*functions*/
function handleFilter(filter, isLang){

  setIsFiltering(true)
  let newFilteredList = []
  /*change the filtered list broski!*/

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
  
   
  
//actual listing
if(!isFiltering && !isLang){
    newFilteredList = jobs.filter(job=>{
      if(job.role===filter || job.level===filter ){
        return job
      }
    })
  
  }else if(isLang && !isFiltering){
   jobs.forEach(job=>{
      let langs = job.languages
      for(let i=0; i<langs.length; i++){
        if(filter===langs[i]){
          newFilteredList.push(job)
        }
      }
    })
  }else if(isLang && isFiltering){
    if(!isIn){
      setPrevList([...prevList, filteredList])
    }
    filteredList.forEach(job=>{
      let langs = job.languages
      for(let i=0; i<langs.length; i++){
        if(filter===langs[i]){
          newFilteredList.push(job)
        }
      }
    })
  }
  else{
    if(!isIn){
      setPrevList([...prevList, filteredList])
    }
    newFilteredList = filteredList.filter(job=>{
      if(job.role===filter || job.level===filter ){
        return job
      }
    })
  }
  setFilteredList(newFilteredList)


  
 
  //console.log(filters)

}


function handleDelete(index, filter){
  let newFilteredList = []
  setFilters(filters.filter(filter=>filter!=filters[index]))
  setFilteredList(prevList[(prevList.length)-1])
  prevList.pop()
  if(filters.length===1){
    setIsFiltering(false)
  }


  /*if(filters.length!=1 && (index+1)===filters.length){
    newFilteredList = filteredList.filter(job=>{
      if(job.role===filters[index-1] || job.level===filters[index-1] ){
        console.log(filters[index-1])
      }
    })
    setFilteredList(newFilteredList)
  }*/


  //console.log(filter)
  //console.log(index)
}

function handleClear(){
  setFilters([])
  setIsFiltering(false)
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
                 <div className="cat" onClick={()=>handleFilter(job.role)}>
                   {job.role}
                 </div>
                 <div className="cat" onClick={()=>handleFilter(job.level)}>
                   {job.level}
                 </div>
                 {job.languages.map(lang=>{
                   return <div className="cat" onClick={()=>handleFilter(lang, true)}>
                     {lang}
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