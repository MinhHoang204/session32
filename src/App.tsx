import React from 'react'
import ClassComponent from './components/ClassComponent'
import Form from './components/Form'
import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Bai4 from './components/Bai4'
import Bai5 from './components/Bai5'

export default function App() {
  // setTimeout(()=>{
  //   console.log("hàm settimeout được gọi!");
    
  // },5000)
  // let interval = setInterval(()=>{
  //   console.log("hàm setInterval được gọi!")
  // },1000)
  // khi viết hàm setInterval và setTimeout nên viết trong component didMount
  // const handleClick=()=>{
  //   clearInterval(interval)
  // }
  /*
    setInterval chạy nhiều lần khi muốn dừng setInterval thì phải clearInterval 
   */
  return (
    <div>App
      <ClassComponent></ClassComponent>
      <Form></Form>
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <Bai5></Bai5>
    </div>
  )
}
