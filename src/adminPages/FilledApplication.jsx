import UserApplication from "../componemts/UserApplication";

export default function FilledApplication() {
  return (
    <div className="w-full p-4">
      <div className="w-full pb-4">
        <h1 className="text-4xl font-bold ">Application Filled</h1>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <UserApplication admin={true} />
        <UserApplication admin={true} />
        <UserApplication admin={true} />
        <UserApplication admin={true} />
      </div>
    </div>
  );
}
