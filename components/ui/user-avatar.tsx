import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const UserAvatar = () => {
    const { user } = useUser();

    return (
        <Avatar className="h-8 w-8">
            {user ? (
                <AvatarFallback>
                    {/* Using initials as the fallback content */}
                    {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
                </AvatarFallback>
            ) : (
                <AvatarFallback>
                    {/* Generic fallback if user details are not available */}
                    U
                </AvatarFallback>
            )}
        </Avatar>
    );
};
