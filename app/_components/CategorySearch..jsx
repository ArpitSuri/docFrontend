// CategorySearch.js
"use client";

import React, { useEffect, useState, useCallback } from "react";
import GlobalApi from "../_utils/GlobalApi"; // Adjust the path if needed
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const CategorySearch = () => {

  const [categoryList , setCategoryList] = useState([]);

  useEffect(()=>{
    getCategoryList()
  },[])

  const getCategoryList=()=>{ 
    GlobalApi.getCategory().then(resp=>{
      // console.log(resp.data.data);
      setCategoryList(resp.data.data);


    })
  }



  return (
    <div className="flex flex-col gap-5 items-center mb-10">
  <h1 className="font-bold text-4xl">
    Get Your <span className="text-blue-600">Doctor</span>
  </h1>
  <h4 className="text-gray-500">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </h4>

  <div className="flex w-full max-w-sm items-center space-x-2">
    <Input type="text" placeholder="Search Doctor" />
    <Button type="submit">Search</Button>
  </div>

  {/* Display categories */}


  {/* {categoryList.map((item, index) => (
    <div key={index} className="flex items-center gap-2 ">
      {item.attributes?.Icon?.data?.attributes?.url ? (
        <Image
          src={item.attributes.Icon.data.attributes.url}
          alt="department logo"
          width={40}
          height={40}
        />
      ) : (
        <Image
          src="/fallback-image.png"
          alt="default department logo"
          width={40}
          height={40}
        />
      )}
      <label>{item?.attributes?.Name || "Unnamed Category"}</label>
    </div>
  ))} */}


  <div className="grid grid-cols-2 md:grid-cols-3 mt-5 lg:grid-cols-5">
  {categoryList.map((item,index)=>(
    <Link   href={'/search/'+item.departmentName}
    key={index} className="flex flex-col  text-center items-center gap-2 m-2 rounded-lg bg-blue-50  p-5 hover:scale-110 transition-all ease-in-out cursor-pointer">
      <Image src={item.departmentImg?.url} alt="logo"
      width={140} height={140}/>
      <label className="text-blue-600 text-sm" >{item.departmentName}</label>
    </Link>
  ))}
  </div>


</div>

  );
};

export default CategorySearch;
