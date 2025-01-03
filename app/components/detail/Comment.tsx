"use client ";
import { Rating } from "@mui/material";
import { RxAvatar } from "react-icons/rx";

const Comment = ({ prd }: { prd: any }) => {
  console.log(prd, "comment");
  return (
    <div className="border w-full md:w-1/3 p-2 rounded-lg my-3 ">
      <div className="flex items-center gap-1">
        <RxAvatar size="45" />
        <div>
          <div>{prd?.user?.name}</div>
          <Rating name="read-only" value={prd.rating} readOnly />
        </div>
      </div>
      <div className="text-slate-500">
        {prd.comment} sassa asa sa fdfdfdff e
      </div>
    </div>
  );
};

export default Comment;
