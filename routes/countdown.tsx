import Countdown from "../islands/Countdown.tsx";

export default function Page() {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  return (
    <div className="bg-[#86efac] px-4 py-8">
      <div className="flex flex-col justify-center items-center">
        <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
        <p className="font-semibold">
          The big event is happening <Countdown target={date.toISOString()} />.
        </p>
      </div>
    </div>
  );
}