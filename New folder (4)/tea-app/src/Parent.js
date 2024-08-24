// import React from 'react';
// import Child from './Child'; // Importing Child component with correct naming

// const Parent = () => {
//     const data=(data)=>{
//       console.log(data)
//     }
//   return (
//     <div>
//       Parent
//       <Child  data={data}/> 
//     </div>
//   );
// }

// export default Parent;

import React from 'react';
import Child from './Child'; // Importing Child component with correct naming

const Parent = () => {
    const iphone=(name)=>{
        console.log(name)
        alert(name)

    }
    
  return (
    <div>
      Parent
      <Child mobile={iphone}/> 
    </div>
  );
}

export default Parent;

