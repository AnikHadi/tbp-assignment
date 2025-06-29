import { Facebook, Globe, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function FooterAddress() {
  return (
    <div className="main-container w-full grid md:grid-cols-7 grid-cols-2 gap-12 md:gap-4 pb-10">
      <div className="col-span-2  md:mx-0">
        <h1 className="text-2xl font-semibold text-slate-700">Address</h1>
        <div className="flex  gap-2 mt-5 text-xs text-slate-400">
          <Facebook />
          <Globe />
          <Linkedin />
          <Instagram />
        </div>
      </div>
      <div className="col-span-3 flex flex-col md:flex-row gap-12 justify-between  ">
        <div>
          <h1 className="text-2xl font-semibold text-slate-700">About</h1>
          <div className="flex flex-col gap-2 mt-5 text-xs text-slate-400">
            <Link href="/about-us">About Us</Link>
            <Link href="/destination">Destination</Link>
            <Link href="#">News & Events</Link>
            <Link href="#">Testimonials</Link>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-slate-700">Features</h1>
          <div className="flex flex-col gap-2 mt-5 text-xs text-slate-400">
            <Link href="#">Payments</Link>
            <Link href="#">Vistula Accounts</Link>
            <Link href="#">Referel Bonus</Link>
            <Link href="#">Go-Pay</Link>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-slate-700">Company</h1>
          <div className="flex flex-col gap-2 mt-5 text-xs text-slate-400">
            <Link href="#">Carees</Link>
            <Link href="#">Privacy & Policy</Link>
            <Link href="#">FAQ</Link>
            <Link href="#">Partners</Link>
          </div>
        </div>
      </div>
      <div className="col-span-2   md:mx-0 md:ml-auto ">
        <h1 className="text-2xl font-semibold text-slate-700">Contact Us</h1>
        <a
          className="text-xs text-slate-400 mt-3"
          href="mailto:example@gmail.com"
        >
          example@gmail.com
        </a>
        <h2 className="text-xl font-semibold text-slate-700 mt-1">
          Get the App
        </h2>
        <button className="w-fit mt-2 bg-red-500 py-1.5 px-8 text-sm text-white rounded-full">
          Download App
        </button>
      </div>
    </div>
  );
}
