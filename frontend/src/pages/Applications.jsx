import UserApplication from "../componemts/UserApplication";

export default function Applications() {
  return (
    <div className="w-full p-4">
      <div className="w-full pb-4">
        <h1 className="text-4xl font-bold ">Your Applications</h1>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <UserApplication />
        <UserApplication />
        <UserApplication />
        <UserApplication />
      </div>
    </div>
  );
}
