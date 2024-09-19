import React from "react";
import AppliedUser from "../componemts/AppliedUser";

export default function AllApplication() {
  return (
    <div className="w-full p-4">
      <div className="w-full pb-4">
        <h1 className="text-4xl font-bold ">Applied user List for this Job</h1>
      </div>
      <div>
        <AppliedUser />
        <AppliedUser />
        <AppliedUser />
      </div>
    </div>
  );
}
