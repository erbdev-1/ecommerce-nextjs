"use client ";
import { RxAvatar } from "react-icons/rx";

const Comment = ({ prd }: { prd: any }) => {
  console.log(prd, "comment");
  return (
    <div className="border w-full md:w-1/3 p-2 rounded-lg">
      <div className="flex items-center gap-1">
        <RxAvatar size="25" />
        <div>{prd?.user?.name}</div>
      </div>
      <div className="text-slate-500">
        {prd.comment} sassa asa sa fdfdfdff e
      </div>
    </div>
  );
};

export default Comment;
