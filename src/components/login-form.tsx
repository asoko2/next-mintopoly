export type LoginFormProps = {
  onSubmit: (formdata: FormData) => void;
};

export default function LoginForm({ onSubmit }: LoginFormProps) {
  return (
    <form className="w-full flex flex-col gap-8" action={onSubmit}>
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
  );
}
