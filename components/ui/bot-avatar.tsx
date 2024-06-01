import { Avatar, AvatarImage } from "./avatar";
export const BotAvatar = () => {
    return (
        <Avatar className = "h-4 w-4 ">
          <  AvatarImage className= "p-1" src="/logo.png" />
        </Avatar>
    );
};