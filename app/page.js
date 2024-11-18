import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch.";
import DoctorList from "./_components/DoctorList";


export default function Home() {
  return (
    <div className="mx-3">
   <Hero/>

    {/* catergory Search */}
   <CategorySearch/>


   {/* popular doctor list */}
   <DoctorList/>
    </div>
  );
}
