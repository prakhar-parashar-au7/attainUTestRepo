let a = false

const toDoInSequence = (ar) => {
    let i = 0
    
 baap =  setInterval(()=> {
     if(i<ar.length){
        let p = new Promise( (resolve, reject) => {
            ar[i]()
                     
            s =  setInterval(()=> {
              if(a == true){
                   resolve()
                   console.log(a)
                    clearInterval(s);
                  
               }
           }, 1000)
           
       }).then(()=> {
          i++;
          if(i==ar.length){
              clearInterval(baap);
          }
          
           a = false
       })

     }
   
  }

   , 1000)

           
    }








const doIn5Seconds = () => {
    
    setTimeout(()=> {
    
    console.log("in 5");
    a = true;
    
    }, 5000)
}

const doIn2Seconds = () => {
    setTimeout(()=> {
       console.log("in 2")
       a = true
        
    }, 2000)
}

const doIn9Seconds = () => {
    setTimeout(()=> {
        console.log("in 9")
        a = true
    }, 9000)
}

const arr = [doIn5Seconds, doIn2Seconds, doIn9Seconds]

toDoInSequence(arr);

