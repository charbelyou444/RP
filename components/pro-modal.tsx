"use client"

import { useProModal } from "@/hooks/use-pro-modal";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Badge } from "./ui/badge";
import { MessageSquare, Music, ImageIcon, Video, Code, Check, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";
const tools = [
    {
      label:"Conversation",
      icon: MessageSquare,
      color:"text-violet-500",
      bgColor:"bg-violet-500/10",
      href:"/conversation"},
    {
        label:"Music Generation",
        icon:Music,
        color:"text-emerald-500",
        bgColor:"bg-emerald-500/10",
        href:"/music"},
    {
          label:"Image Generation",
          icon: ImageIcon,
          color:"text-pink-700",
          bgColor:"bg-pink-700/10",
          href:"/image"},
    {
            label:"Video Generation",
            icon: Video,
            color:"text-orange-700",
            bgColor:"bg-orange-700/10",
            href:"/video"},
   {
              label:"Code Generation ",
              icon: Code,
              color:"text-green-700",
              bgColor:"bg-green-700/10",
              href:"/code"}
  ]
export const ProModal=() =>{

    const proModal = useProModal();
    const [loading,setLoading]=useState(false);
    const onSubscribe= async() =>{

try{
    console.log("hello wprld")
    setLoading(true);
const response = axios.get("/api/stripe");
    window.location.href =(await response).data.url;

}catch(error){
    console.log(error,"STRIPE_CLIENT_ERROR");

}finally{
    setLoading(false);
}
    }
    return (
       <Dialog open ={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                                <div className="flex items-center gap-x-2 font-bold py-1 ">

                                    Upgrade To Priapus 
                        <Badge className="uppercase text-sm py-1" variant ="premium">
                            Pro 
                        </Badge>
                        </div>
                        </DialogTitle>
                        <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium ">

                {tools.map((tool)=>(
                    <Card key={tool.label}
                    className="p-3 ,border-black/5 flex items-center">
                                        <div className ="flex items-center gap-x-4">
                                                <div className={cn("p-2 w-fit rounded-md",tool.bgColor)}>
                                                    <tool.icon className={cn("w-6 h-6",tool.color)} />

                                                </div>
                                                <div className= "font-semibold text-sm">
                                                    {tool.label}
                                        </div>
                                     </div>
                                <Check className = "text-primary w-5 h-5" />
                    </Card>
                ))}



                        </DialogDescription>

                    </DialogHeader>
                            <DialogFooter>
                                <Button
                                 onClick={onSubscribe}
                                size="lg"
                                variant="premium"
                                className="w-full"
                                
                                
                                >
                                        Upgrade 
                                        <Zap className="w-4 h-4 ml-2 fill-white "/>
                                </Button>
                            </DialogFooter>
            </DialogContent>


        </Dialog>
    )
}