import { getActiveRound } from "@/utils/action";
import React from "react";

export default function Home() {
  
  // const onSubmit = async (formdata: FormData) => {
  //   const response = await getActiveRound();
  //   console.log(response)
  // }

  async function onSubmit(formdata: FormData) {
    "use server"

    const rawFormData = {
      account: formdata.get("account"),
      token: formdata.get("token"),
    }

    const round = await getActiveRound(rawFormData);
    console.log(round)
  }

  return (
    <div className="min-h-screen min-w-full bg-neutral-800 p-8 flex justify-center">
      {/* //create a card with shadow on bottom and right */}
      <div className="w-1/3 h-fit p-8 bg-neutral-900 drop-shadow-2xl justify-center items-center">
        <form className="w-full flex flex-col gap-8" action={onSubmit} >
          <div className="flex items-center justify-between w-full gap-8">
            <div className="w-1/6">Account</div>
            <div className="w-full">
              <input
                type="text"
                name="account"
                id="account"
                className="px-3 py-2 border outline-none bg-black border-white w-full"
              />
            </div>
          </div>
          <div className="flex items-center justify-between w-full gap-8">
            <div className="w-1/6">Token</div>
            <div className="w-full">
              <input
                type="text"
                name="token"
                id="token"
                className="px-3 py-2 border outline-none bg-black border-white w-full"
              />
            </div>
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="bg-neutral-500 hover:bg-neutral-600 transition-all w-full px-3 py-2"
            >
              Start
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
