// import dummy from "../../assets/icons8-typescript.svg"
import { TbStethoscope, TbCheck, TbCalendarTime } from "react-icons/tb"
import { FaLocationArrow } from "react-icons/fa"
import { ReactElement } from "react"

interface stepsData {
    icon: ReactElement,
    title: string,
    detail: string
}

 
export const stepsData: stepsData[] = [
    {
        "icon": <TbStethoscope />,
        "title": "Search Doctor",
        "detail": "Before you book an appointment. First of all, search for a Doctor."
    },
    {
        "icon": <FaLocationArrow />,
        "title": "Choose your location",
        "detail": "Then enter your location and we will help you find appointment near you. "
    },
    {
        "icon": <TbCalendarTime />,
        "title": "Schedule Appointment",
        "detail": "Proceed to select a date to set an appointment with your Doctor. "
    },
    {
        "icon": <TbCheck />,
        "title": "Get Your Solution",
        "detail": "We will help find and provide the best for your health."
    },
    
]