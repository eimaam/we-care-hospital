import avatar1 from "../../assets/avatar (1).png"
import avatar2 from "../../assets/avatar (2).png"
import avatar3 from "../../assets/avatar (3).png"

interface reviewFormat {
  avatar: string,
  name: string,
  job: string,
  comment: string
}

export const reviewData: reviewFormat[] = [
  {
    "avatar": avatar1,
    "name": "Michael George",
    "job": "Accountant",
    "comment": "It was an amazing experience. The Doctor really took time to make sure I was okay before returning back to work.",    
  },
  {
    "avatar": avatar2,
    "name": "Ifeanyi Okere",
    "job": "Teacher",
    "comment": "The pay was less and I really enjoyed the Doctor's counselling.",    
  },
  {
    "avatar": avatar3,
    "name": "Sandara Kate",
    "job": "UI/UX Designer",
    "comment": "Affordable and reliable service.",    
  },
]