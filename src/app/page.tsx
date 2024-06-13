import { startMinting } from "@/api/startMinting";
import LoginForm from "@/components/login-form";
import UserData from "@/components/user-data";
import React from "react";

export default function Home() {
  let userData = {};
  // async function onSubmit(formdata: FormData) {
  //   // "use server";

  //   const rawFormData = {
  //     account: formdata.get("account"),
  //     token: formdata.get("token"),
  //   };

  //   const round = await startMinting(rawFormData);
  // }

  const onSubmit = async (formdata: FormData) => {
    "use server";
    const rawFormData = {
      account: formdata.get("account"),
      token: formdata.get("token"),
    };
    // console.log(rawFormData)
    const mintingRes = await startMinting(rawFormData);

    if (mintingRes?.message === "success") {
      userData = mintingRes.data;
    }
  };

  return (
    <div className="min-h-screen min-w-full bg-neutral-800 p-8 flex flex-col justify-center">
      {/* //create a card with shadow on bottom and right */}
      <div className="w-2/3 lg:w-1/3 h-fit p-8 bg-neutral-900 shadow-white shadow-lg justify-center items-center mb-8">
        <LoginForm onSubmit={onSubmit} />
      </div>

      <div className="w-2/3 lg:w-1/3 h-fit p-8 bg-neutral-900 shadow-white shadow-lg justify-center items-center mb-8">
        <UserData />
      </div>
    </div>
  );
}
