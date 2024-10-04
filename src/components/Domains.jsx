import React from "react"
import Heading from "./Heading"
import Card from "./Card"

export default function Domains() {
  return (
    <section className="py-24 border-y border-white relative" id="domains">
      <Heading text="Domains" />
      <img
        src="/placeholder.svg?height=200&width=200"
        alt=""
        className="absolute left-0 top-20 hidden md:block"
      />
      <img
        src="/placeholder.svg?height=200&width=200"
        alt=""
        className="absolute right-0 bottom-0 hidden md:block"
      />
      <div className="mx-auto md:w-2/3 flex flex-wrap justify-center items-center mt-24 gap-20">
        <Card
          text="AI/ML / CYBERSECURITY"
          desc="AI/ML offers endless opportunities for startups to create innovative products. From AI chatbots and smart shopping suggestions to medical tools and predictive systems, the possibilities are huge. Projects can focus on areas like healthcare, autonomous drones, or AI ethics. Participants are encouraged to build solutions that are both technically innovative and have strong business potential."
          bgColor="bg-[#FF5055]"
        />
        <Card
          text="POWER SYSTEMS / RENEWABLE ENERGY SYSTEMS / SMART GRID"
          desc="The Power Systems domain focuses on creating sustainable energy solutions for power generation, distribution, and storage. Projects aim to solve real-world challenges, like designing smart grids or renewable energy systems (e.g., solar or wind) for remote areas. The goal is to develop scalable ideas that can become marketable products or businesses."
          bgColor="bg-[#FAF3DD]"
          textColor="text-gray-900"
        />
        <Card
          text="ROBOTICS / DRONE & FIXED WING"
          desc="Robotics allows students to develop innovative automation solutions like drones, robotic arms, and smart home devices. Projects can include AI features for tasks like object detection, path planning, or healthcare assistance. Participants are encouraged to create scalable, product-ready solutions that showcase technical skills and entrepreneurial potential."
          bgColor="bg-[#C80774]"
        />
        <Card
          text="SMART SYSTEMS / EMBEDDED SYSTEMS / IOT"
          desc="The Smart Systems domain focuses on creating devices where hardware and software collaborate in real-time for optimal performance and efficiency. Examples include smart home devices, health monitors, and automated irrigation systems. Participants are encouraged to design innovative, scalable solutions that highlight their technical expertise and entrepreneurial spirit."
        />
        <Card
          text="POWER SYSTEMS / RENEWABLE ENERGY SYSTEMS / SMART GRID"
          desc="The Power Systems domain focuses on creating sustainable energy solutions for power generation, distribution, and storage. Projects aim to solve real-world challenges, like designing smart grids or renewable energy systems (e.g., solar or wind) for remote areas. The goal is to develop scalable ideas that can become marketable products or businesses."
          bgColor="bg-[#FF5055]"
          textColor="text-gray-800"
        />
      </div>
    </section>
  )
}