  /*jobs.forEach(job=>{
    //check languages
    let langs = job.languages
 

    /*for(let i=0; i<(filters.length!=0?filters.length:1); i++){
      if(filters.length===0){
        if(job.role===filter || job.level===filter){
        
          newFilteredList.push(job)
          //console.log(job)
          console.log("i ran")
        }
      }else{
        if(job.role===filters[i] || job.level===filters[i]){
            //if the job isnt in the list already, add it
        /*  for(let j=0; j<newFilteredList.length; j++){
            if(newFilteredList[j]!=job){
              newFilteredList.push(job)
            }
          }*//*
          newFilteredList.push(job)
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
    
    }*//*
  })*/







  let langExists = false
  /*jobs.forEach(job=>{
    let langs = job.languages
    for(let i=0; i<langs.length; i++){
      if(filter===langs[i]){
        newFilteredList.push(job)
      }
    }
  })*/


  /*else{
    newFilteredList = filteredList.filter(job=>{
      if(job.role===filter || job.level===filter ){
        return job
      }
    })
    prevList.push(filteredList);
  }*/





  /*
  
  else if(isLang && !isFiltering){
    newFilteredList = jobs.map(job=>{
      let langs = job.languages
      for(let i=0; i<langs.length; i++){
        if(filter===langs[i]){
          console.log(job)
          return job
          
        }else{
          return
        }
      }
    })
  }

  */







  //filter?

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


  
 

  /*delete

  let newFilteredList = []
  setFilters(filters.filter(filter=>filter!=filters[index]))
  setFilteredList(prevList[(prevList.length)-1])
  prevList.pop()
  if(filters.length===1){
    setIsFiltering(false)
    
    

    //i have no idea what i was trying to do here lmao
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
    
    
    

  /*old cats 
  
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
  
  
  */
  


                 jobs.forEach(job=>{
                  if(job.role===filter || job.level === filter){
                    newFilteredList.push(job)
                  }
                })




                //another attempt at the filter smh
                if(!isIn){
                  if(filters.length<1){
                    jobs.forEach(job=>{
                      for(let i=0; i<jobs.filter.length; i++){
                        if(filter = jobs.filter[i]){
                          newFilteredList.push(job)
                        }
                      }
                    })
                    console.log(newFilteredList)
                  } 
                  
                  if(filters.length>=1){
                    for(let i=0; i<filters.length; i++){
                      newFilteredList = []
                      filteredList.forEach(job=>{
                        if(job.level === filters[i] || job.role === filters[i]){
                          newFilteredList.push(job)
                        }
                      })
              
                      
                      if(newFilteredList.length!=0){
                        setFilteredList(newFilteredList)
                      }
              
                    }
                    newFilteredList = []
                    filteredList.forEach(job=>{
                      if(job.level === filter || job.role === filters){
                        newFilteredList.push(job)
                      }
                    })
                    if(newFilteredList.length!=0){
                      setFilteredList(newFilteredList)
                    }
                  }
                }
              

                

                //ffs
                 //actual filtering
  /*if(!isIn && !isFiltering){
    jobs.forEach(job=>{
      if(job.level===filter || job.role === filter){
        newFilteredList = [...newFilteredList, job]
      }
    })

  }
  
  if(!isIn && isFiltering){
    filteredList.forEach(job=>{
      if(job.level===filter || job.role === filter){
        newFilteredList = [...newFilteredList, job]
      }
    })
  }


  if(isLang && !isFiltering && !isIn){
    jobs.forEach(job=>{
      let langs = job.languages
      for(let i=0; i<langs.length; i++){
        if(langs[i]===filter){
          newFilteredList = [...newFilteredList, job]
        }
      }
    })
  }

  if(isLang && isFiltering && !isIn){
    filteredList.forEach(job=>{
      let langs = job.languages
      for(let i=0; i<langs.length; i++){
        if(langs[i]===filter){
          newFilteredList = [...newFilteredList, job]
        }
      }
    })
  }*/




  //console.log(filters)




  /*justincase
  for(let i=0; i<filterS.length; i++){
          if(filterS[i]===filter){
            newFilteredList.push(job)
          }
        }


        
    /*if(filters.length>=1 && filter){
      for(let i=0; i<filters.length; i++){
        newFilteredList = []
        filteredList.forEach(job=>{
          let filterS = job.filters
          for(let j=0; j<filterS.length; j++){
            if(filterS[j]===filters[i]){
              newFilteredList.push(job)
            }
          }
        })
        setFilteredList(newFilteredList)
      }
      newFilteredList = []
      filteredList.forEach(job=>{
        let filterS = job.filters
        for(let i=0; i<filterS.length; i++){
          if(filterS[i]===filter){
            newFilteredList.push(job)
          }
        }
      })
      setFilteredList(newFilteredList)


          /*filteredList.forEach(job=>{
          let filterS = job.filters
          filterS.forEach(filt=>{
            if(filt===fil){
              newFilteredList.push(job)
            }
          })
        })
    }*/
  
  