"use client";
import { formSchema } from "./constants";
import { useForm} from "react-hook-form";
import { Heading } from "@/components/ui/heading";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSquare, Music } from "lucide-react";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Empty } from "@/components/ui/empty";
import { Loader } from "@/components/ui/loader";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/ui/user-avatar";
import { BotAvatar } from "@/components/ui/bot-avatar";
import { useProModal } from "@/hooks/use-pro-modal";

interface ChatMessage {
    role: string;
    content: string;
}
const MusicPage = () => {
    const proModal = useProModal();
    const [music, setMusic] = useState<string>();
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            prompt: ""
        }
    });

const isLoading = form.formState.isSubmitting; 
const onSubmit = async ( values : z.infer<typeof formSchema >) => {
    try
    {
           setMusic(undefined);

            const response = await axios.post("/api/music",values);
            setMusic(response.data.audio);
               
                    form.reset();


    } catch(error: any){
        if(error?.response?.status===403){
            proModal.onOpen();
                  }
    } finally { 
router.refresh();
    }
   
};


    return ( 
        <div>
           <Heading 
           
           title="Music Generation"
           description="Turn your prompt into music"
           icon={Music}
           iconColor="text-emerald-500"
           bgColor="bg-emerald-500/10"
           
           
           />
           <div className="px-4 lg:px-8">
<div>
<Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}
    className="rounded-lg 
    border
    w-full
    p-4
    px-3
    md:px-6
    focus-wiithin:shadow0sm
    grid
    grid-cols-12
    gap-2
    "
    >
            <FormField 
                name="prompt"
             render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                        <FormControl className="m-0 p-0 ">
                            <Input
                            className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                            disabled={isLoading}
                            placeholder="Dota 2 soundtrack"
                            {...field} />
                        </FormControl>

                </FormItem>
               )}
            
            />




<Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
    Generate
</Button>
    </form>
</Form>


</div>

<div className="space-y-4 mt-4">
    {isLoading && ( 
        <div className="p-8 rounded-lg w-full flex items-center justify-center vg-muted ">
            <Loader />
            </div>
    )}




            
                   {music && ( 
                    <audio controls className="w-full mt-9 ,">
                        <source src={music} />
                    </audio>
                   )}
               
                </div>
           </div>
        </div>
    )
}
export default MusicPage;