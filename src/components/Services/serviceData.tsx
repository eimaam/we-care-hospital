import { ReactElement } from "react"
import { FaUserMd, FaRegHospital, FaRegAddressBook } from "react-icons/fa"
import { VscDeviceCameraVideo } from "react-icons/vsc"

interface serviceData {
    icon: ReactElement,
    title: string,
    detail: string
}

 
export const serviceData: serviceData[] = [
    {
        "icon": <FaUserMd />,
        "title": "Specialized",
        "detail": "Doctors"
    },
    {
        "icon": <VscDeviceCameraVideo />,
        "title": "Online",
        "detail": "Treatment"
    },
    {
        "icon": <FaRegHospital />,
        "title": "Hospital",
        "detail": "Services "
    },
    {
        "icon": <FaRegAddressBook />,
        "title": "Book",
        "detail": "Appointment"
    },
    
]