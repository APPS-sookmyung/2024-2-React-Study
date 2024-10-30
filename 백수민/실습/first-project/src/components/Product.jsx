import React from 'react'

// export default function Product(props) {

//   console.log(props);
//   return (
//     <div>
//       <img src={props.url} alt={props.alt}/>
//       <div>{props.name}</div>
//       <div>{props.price}</div>
//     </div>
//   )
// }

// 객체 구조 분해 할당(비구조화 할당)
export default function Product({url, alt, name, price}) {
  return (
    <div>
      <img src={url} alt={alt}/>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  )
}

