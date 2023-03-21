import React, {useState} from 'react';



import Nav from "./nav"
import Body from "./body"

export default function App() {

// const thingsArray =  [ "Thing 1", "Thing 2"]
//   const thingsElements = thingsArray.map(thing => <p key = {thing}> {thing} </p>)
  
  
//     function addItem(){
//       const newThingText = `Thing ${thingsArray.length +1}`
//       thingsArray.push(newThingText)
//       console.log(thingsArray)
//     }
    
  return (
    <div className='m-0'>
    <Nav/>
    <Body/>
    {/* <section>
      <button onClick={addItem} className='px-6 text-white font-bold py-3 bg-green-500 rounded-xl m-2'>Add Item</button>
    {thingsElements}
    </section> */}
    </div>
  )
};




// export default function App() {
    // const [count, setCount] = useState("0") 
    // //the function here is called a state setter, 
    // //it is in BLUE and used to give flexiility to the one in RED
    
    // // setCount('Yes')
    
    
    // // if you ever need old value of state to determine the new value of state use the call back function with an arrow function, the
    // // callback will receive old value as parameter which you can then use to determine new value of state
    //   function add() {
    //     setCount(prevCount => prevCount + 1)
    //     }
        
    // function subtract() {
    //     setCount(prevCount => prevCount - 1)
    // }
     
    
    //   return (
    
    //       <div className="bg-black w-2/4 rounded-lg pb-8">
    //           <h1 className="text-4xl text-white mb-10 text-center pt-4 font-bold">Is state important to know?</h1>
    //          <div className='flex flex-row justify-center'>
    //           <button onClick = {subtract} className='flex justify-center item-center text-center pt-16'>
    //               <h1 className=' hover:bg-gray-200 text-white rounded-full w-16 h-16 p-3 pb-14 bg-gray-500 text-4xl font-bold'>-</h1>
    //          </button>
    //          <div className='flex justify-center item-center text-center'>
    //               <h1 className='text-black rounded-full w-36 h-36 pt-12 p-5 bg-white text-5xl font-bold'>{count}</h1>
    //          </div>
    //          <button onClick = {add} className='flex justify-center item-center text-center pt-16'>
    //               <h1 className=' hover:bg-gray-200 text-white rounded-full w-16 h-16 p-3 pb-14 bg-gray-500 text-4xl font-bold'>+</h1>
    //          </button>
    //           </div>
    //       </div>
    //   )
    // }