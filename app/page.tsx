import Image from "next/image";


export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-blue-100">
      <div className="w-8/12 sm:w-6/12 lg:w-4/12 xl:w-3/12 rounded-2xl bg-white p-4 flex flex-col items-center">
        <img src="/images/image-qr-code.png" alt="" className="w-full aspect-square rounded-lg"/>
        <div className="mt-5 w-11/12">
          <h2 className="text-center text-xl text-zinc-700 font-extrabold">
            Improve your front-end skills by building projects
          </h2>
          <p className="text-center my-4 text-slate-400">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
