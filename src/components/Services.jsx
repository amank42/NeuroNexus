import React from 'react'
import Heading from '../layout/Heading'
import ServiceCard from '../layout/ServiceCard'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.jpg'

const Services = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
        <Heading title1="Our" title2="Services" />

        <div className=" flex flex-wrap justify-items-center gap-20 mt-10">
            <ServiceCard img={img3} title="Web Development"/>
            <ServiceCard img={img4} title="App Development"/>
            <ServiceCard img={img5} title="Graphic Designer"/>
            <ServiceCard img={img6} title="Digital Marketing
            "/>
        </div>
    </div>
  )
}

export default Services
