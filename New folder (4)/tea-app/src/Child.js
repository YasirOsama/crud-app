// import React from 'react'

// const child = (props) => {
//     const name='aftab khan'
//   return (
   
//     <div>child
       
//        <button onClick={()=> props.data(name)}>clickme</button>
//     </div>
//   )
// }

// export default child

import React from 'react'

const child = (props) => {
    const name='Ali umer';
    const handleclick=()=>{
        props.mobile(name)
    }
   
  return (
    <div>
        <button onClick={handleclick}>update</button>
    </div>
  )
}

export default child