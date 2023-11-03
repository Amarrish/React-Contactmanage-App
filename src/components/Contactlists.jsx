import React, { useState } from 'react'


const Contactlists = ({dataTask}) => {
const [userinputvalue,setUserinputvalue] = useState({
    username:'',
    number:'',
    email:''
})

const[valid,setValid] = useState({
    username:(false),
    number:(false),
    email:(false)
})


const handlechange = (e) =>{
   const {name , value} = e.target;
   setUserinputvalue({...userinputvalue , [name]:value});
   if(name==="username"){
            if(!!value.match(/^[A-Z][a-zA-Z0-9_-]{2,19}$/)){
                setUserinputvalue({...userinputvalue , [name]:value});
                setValid({...valid, username:false}) 
            }else{
                setUserinputvalue({...userinputvalue , [name]:value});
                setValid({...valid, username:true})
            }
   }
   else if(name==='number'){
            if(!!value.match(/^(\d{3}[-\s]?)?\d{3}[-\s]?\d{4}$/)){
                setUserinputvalue({...userinputvalue,[name]:value})
                setValid({...valid, number:false})
            }
            else{
                setUserinputvalue({...userinputvalue,[name]:value})
                setValid({...valid, number:true})
            }
   }
   else if(name==='email'){
            if(!!value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
                setUserinputvalue({...userinputvalue,[name]:value})
                setValid({...valid,email:false})
            }
            else{
                setUserinputvalue({...userinputvalue,[name]:value})
                setValid({...valid,email:true})
            }
   }
}


const handlesubmit = (e) =>{
    e.preventDefault(); 
    if(!userinputvalue.username || !userinputvalue.number || !userinputvalue.email){
        alert("fill the form completely")
    }
    else{
        dataTask(userinputvalue);
    }
}

  return (
    <>
        <form onSubmit={handlesubmit} className='rounded justify-content-center align-items-center w-auto m-5 border bg-dark text-light' style={{height:'auto'}}>
            <div className='d-flex justify-content-between p-3'>
                <label >Name : </label>
                <input style={{border:'none', outline:'none', borderRadius:'2px', width:'200px'}} 
                type="text"
                name='username'
                value={userinputvalue.username || ""}
                onChange={handlechange}
                />
            </div>
            {
                valid.username &&
                <div><p className='text-center text-danger'>Username is invalid. First letter Cap & Min 3 Letter</p></div>
            }
           

            <div  className='d-flex justify-content-between mt-3 p-3'>
                <label >Number : </label>
                <input style={{border:'none', outline:'none', borderRadius:'2px', width:'200px'}} 
                 type="text"
                 name='number'
                 value={userinputvalue.number || ""}
                 onChange={handlechange} />
            </div>
            {
                valid.number &&
                <div><p className='text-center text-danger'>Number is invalid. Check 10 numbers is there</p></div>
            }

            <div  className='d-flex justify-content-between mt-3 p-3'>
                <label >Email : </label>
                <input style={{border:'none', outline:'none', borderRadius:'2px', width:'200px'}} 
                type="text"
                name='email'
                value={userinputvalue.email || ""}
                onChange={handlechange} />
            </div>
            {
                valid.email &&
                <div><p className='text-center text-danger'>Email is invalid</p></div>
            }
            
            <div  className='d-flex justify-content-center mt-3 p-3'>
                <button disabled={valid.username || valid.number || valid.email?true:false} className='btn  text-light bg-success' type='submit'>ADD CONTACT</button>
            </div>
            
        </form>
    </>
  )
}

export default Contactlists