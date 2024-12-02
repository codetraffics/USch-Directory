import { formatDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Link from "next/link";
import { Button } from "./ui/button";
import { School } from "@/sanity/types";

export type SchoolCardType = School

const SchoolCard = ({ school }: {school: SchoolCardType}) => {
  const { residency, description, _id, views, gender, region, image, title} = school;
  
    return (
    <li className="school-card group">
        <div className="flex-between">
            <p className="school_card_date">
                {residency}
            </p>

            <div className="flex gap-1.5">
                <EyeIcon className="size-6 text-primary" />
                <span className="text-16-medium">{views}</span>
            </div>
        </div>

        <div className="flex-between mt-5 gap-5">
            <div className="flex-1">
            <p className="text-16-medium">{gender}</p>
                
                <Link href={`/school/${_id}`}>
                    <h3 className="text-26-semibold">{title}</h3>
                </Link>
            </div>
        </div>

        <Link href={`/school/${_id}`}>
            <p className="school-card_desc">
                {description}
            </p>

            {/* <img src={image} alt='placeholder' className="school-card_img" /> */}
        </Link>

        <div className="flex-between gap-3 mt-5">
            <Link href={`/?query=${region?.toLowerCase()}`}>
            <p className="text-16-medium line-clamp-1">
                    {region}
            </p>      
            </Link>
            <Button className="school-card_btn" asChild>
                <Link href={`/school/${_id}`}>
                    Details
                </Link>
            </Button>
        </div>
    </li>
  )
}

export default SchoolCard