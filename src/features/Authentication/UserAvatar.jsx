import useUser from "./useUser";

export default function UserAvatar() {
  const { user } = useUser();
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <img
        className="w-7 h-7 rounded-full object-cover object-center"
        src="/user.jpg"
        alt="userAvatar"
      />
      <span>{user?.name}</span>
    </div>
  );
}
