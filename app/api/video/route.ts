import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { OpenAI} from "openai";
import Replicate from"replicate";
const replicate =new Replicate ({
    auth : process.env.REPLICATE_API_TOKEN!
});


    export async function POST (
        req: Request 
    ) {
        try{
                const { userId} = auth();
                const body = await req.json();
                const {prompt } = body ;

            if(!userId){
                return new NextResponse("Unauthorized", {status :401});
            }
            
            if(!prompt){
                return new NextResponse("Prompt are required ", {status :400 });
            }
            const freeTrial = await checkApiLimit;

            if(!freeTrial){
                return new NextResponse("Your free trial is finished !",{status:403});
            }
            const input = {
                fps: 24,
                width: 1024,
                height: 576,
                prompt: prompt ,
                guidance_scale: 17.5,
               
            };
            
            const response = await replicate.run("anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351", { input });
            await increaseApiLimit;
            console.log(response)
          
    return NextResponse.json(response);
        } catch(error){
            console.log("[VIDEO_ERROR]",error);
            return new NextResponse("Internal error", { status: 500 });
        
    }
    }


