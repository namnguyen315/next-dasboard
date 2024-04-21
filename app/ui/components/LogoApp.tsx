import Image from "next/image";
import Link from "next/link";
import { lusitana } from "../fonts";

export default function LogoApp() {
  return (
    <div className=" h-[120px] w-full flex flex-row items-center bg-[#252836] rounded-[15px_15px_5px_5px]">
      <Link href="/" className="ml-2 flex flex-row items-center">
        <Image
          src="/images/logo-app.png"
          width={100}
          height={100}
          alt="Logo App "
        />
        <h1
          className={`${lusitana.className} text-[#50C4ED] text-xl text-center`}
        >
          Home Flow App
        </h1>
      </Link>
    </div>
  );
}
