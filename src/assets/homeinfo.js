import { CgWebsite } from "react-icons/cg";
import { MdOutlineAppShortcut } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { FaRobot } from "react-icons/fa";
import webimage from '../assets/image/web.jpg'
import appimage from "../assets/image/app.jpg"
import aiimage from "../assets/image/ai.webp"
import cloudimage from "../assets/image/cloud.jpg"
import { MdOutlineDesignServices } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import { GiArcheryTarget } from "react-icons/gi";

export const serviceInfo = [
    {
        icon:CgWebsite,
        header:"Web Development"
    },
    {
        icon:MdOutlineAppShortcut,
        header:"App Development"
    },
    {
        icon:GrServices,
        header:"Cloud Computing"
    },
    {
        icon:FaRobot,
        header:"AI/ML"
    }
]


export const serviceIndescription = [
    {
        title:"Web Development",
        description:"Our company specializes in cutting-edge web technologies, providing innovative solutions to enhance online experiences. We focus on developing responsive websites, custom web applications, and e-commerce platforms. With expertise in HTML, CSS, JavaScript, and backend technologies, we create seamless, scalable, and secure digital solutions tailored to meet the unique needs of businesses. Our team is committed to delivering high-performance websites that drive growth, engagement, and success for our clients.",
        image:webimage,
        backgroundImage:'bg-Keyboard'
    },
    {
        title:"App Development",
        description:"Our company excels in app development, creating intuitive and innovative mobile solutions for both Android and iOS platforms. We specialize in building user-friendly, scalable, and feature-rich apps tailored to meet the unique needs of businesses. By leveraging the latest technologies and industry best practices, we ensure seamless performance, high security, and a top-notch user experience. Our team is dedicated to turning ideas into reality, helping businesses enhance customer engagement and drive growth through custom app development.",
        image:appimage,
         backgroundImage:'bg-appImage'
    },
    {
        title:"Cloud Computing",
        description:"Our company offers comprehensive cloud computing services, enabling businesses to scale, innovate, and optimize their operations. We provide secure, flexible, and cost-effective cloud solutions, including cloud storage, computing power, and data management. With expertise in major cloud platforms like AWS, Microsoft Azure, and Google Cloud, we help businesses improve efficiency, enhance collaboration, and ensure seamless access to data anytime, anywhere. Our services are designed to support growth, enhance performance, and drive digital transformation for organizations of all sizes.",
        image:cloudimage,
        backgroundImage:'bg-cloudImage'

    },
    {
        title:"AI/ML",
        description:"Our company specializes in AI/ML solutions, harnessing the power of artificial intelligence and machine learning to drive innovation and improve business outcomes. We develop intelligent systems that automate processes, enhance decision-making, and provide predictive insights. By leveraging advanced algorithms and data analytics, we help businesses optimize operations, personalize customer experiences, and stay ahead in a competitive landscape. Our AI/ML services are designed to unlock new opportunities and accelerate growth across various industries.",
        image:aiimage,
        backgroundImage:'bg-AiImage'
    }
]


export const successOfweblogiance = [
     {
         count:10,
         title:"Years of Excellence",
         suffix:"+",
         duration:3
     },
     {
        count:1000,
        title:"Happy Clients",
        suffix:"+",
        duration:1.5
        
     },
     {
        count:1500,
        title:"Successful Projects",
        suffix:"+",
        duration:0.75
       
     },
     {
        count:"98",
        title:"Client Retention",
        suffix:"%",
        duration:1
     },
]

export const workflow = [
     {
        step:"step-1",
        process:"We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.",
        icons:GiArcheryTarget,
        title:"Examine",
        color:"bg-[#1998E0]",
        textcolor:"text-[#1998E0]"
     },
     {
        step:"step-2",
        process:"Our design approach is to simplify. We embrace the joy in creating something unique that is easy for end users.",
        icons:MdOutlineDesignServices,
        title:"Design",
        color:"bg-[#FFA500]",
        textcolor:"text-[#FFA500]"
     },
     {
        step:"step-3",
        process:"Using modern technologies, we build with efficiency and skill, creating flexible and scalable business-driven solutions.",
        icons:GoProjectRoadmap,
        title:"Build",
        color:"bg-[#16C47F]",
        textcolor:"text-[#16C47F]"
     },
     {
        step:"step-4",
        process:"We take an iterative approach to both our work and our practice, always looking for ways to improve what we do.",
        icons:TbTruckDelivery,
        title:"Deliver",
        color:"bg-[#F93827]",
        textcolor:"text-[#F93827]"
     }
]