


interface EmptyProps {
    label:string;

}













export const Empty = ({
 
}: EmptyProps ) => {
    return(
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="relative h-71 w-71 ">
                     <img
                    
                    alt="empty"
                    
                    src="/empty.png" />
        </div>
        <p className = "text-muted-foreground text-sm">
                There is no Conversation 
        </p>
        </div>
    );

}