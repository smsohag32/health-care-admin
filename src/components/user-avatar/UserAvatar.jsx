import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const UserAvatar = ({ photo, name }) => {
   return (
      <Avatar>
         <AvatarImage src={photo || ""} alt={name || "User"} />
         <AvatarFallback>{name ? name?.slice(0, 2) : "VS"}</AvatarFallback>
      </Avatar>
   );
};

export default UserAvatar;
