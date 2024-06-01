"use client";

import { Item } from "@radix-ui/react-select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials =[
    {
        name:"Pierre Saab ",
        avatar:"P",
        title:"School teacher",
        description : " Best tool ever love it !"
    },
    {
        name:"Rayan Najem ",
        avatar:"R",
        title:"CEO",
        description : " Best tool ever love it !"
    },
    {
        name:"Bader merheb ",
        avatar:"B",
        title:"My Hero Academia ",
        description : " Best tool ever love it !"
    },
    {
        name:"Habibi ",
        avatar:"H",
        title:"Btechrab chi ?",
        description : " Best tool ever love it !"
    }
]






export const LandingContent=() =>{
    return (
        <div className ="px-10 pb-20">
            <h2 className ="text-center text-4xl text-white font-extrablod mb-10">
                Testimonials 
            </h2>
            <div className =" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                   {testimonials.map((item) =>(
                        <Card key ={item.description} className="bg-[#192330] border-none text-white">
                       <CardHeader>
                        <CardTitle className="flex items-center gap-x-2 ">
                            <div>
                                <p className="text-lg">
                                   
                                    {item.name}
                                </p>
                                <p className="text-zinc-400 text-sm">
                                    {item.title}
                                </p>
                            </div>
                        </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-4 ">
                            {item.description}
                        </CardContent>
                        </Card>
                        ))}
            </div>
          
        </div>
    )
}