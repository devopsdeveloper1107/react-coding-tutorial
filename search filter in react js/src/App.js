import React, { useEffect, useState } from 'react';
export default function App() 
{ 
  const[productdata, setProductdata]= useState([]);
  const[filter, setFilter]= useState([]);
  const[query, setQuery]= useState('');
  useEffect(()=>{
    const productdata= async()=>{
      try{
        const req= await fetch('https://fakestoreapi.com/products');
        const res= await req.json();
        setProductdata(res);
        setFilter(res);
      } catch(error){ 
        console.log(error);
      }

    }
    productdata()
  },[]);

  const handleInput =(e)=>{  
    console.log(e.target.value);
    setQuery(e.target.value);
    const result= productdata.filter((item)=>{
    return item.title.toLowerCase().includes(query.toLocaleLowerCase())
    });
    setFilter(result);
  }
   return (
    <React.Fragment>
    <div className="App">       
    <div className='container'>
      <div className='row justify-content-md-center'>
        <div className='col-md-6'>   
        <h3 className='mt-3 mb-3'>Search Bar in React </h3>           
         <div className='input-group mb-3'>
          <input type='text' className='form-control' onChange={(e)=>handleInput(e)} />
          </div> 
          <div className={ query.length ? "searchshow":''}>
          { query.length > 0 &&
            filter.map((pdata, index)=>(
              <p key={index}>{pdata.title}</p>
            ))
          }   
          </div>  
        </div>        
      </div>
    </div>
     
    </div>
    </React.Fragment>
  );
}

