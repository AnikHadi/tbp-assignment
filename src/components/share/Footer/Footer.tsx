import Link from "next/link";
import FooterAddress from "./FooterAddress";

export default function Footer() {
  return (
    <div className="">
      <FooterAddress />
      <div className="bg-slate-800 py-3">
        <div className="main-container flex justify-between text-slate-100 ">
          <Link href="/privacy-policy">Privacy and Policy</Link>
          <span>All rights reserved &copy; Hadiuzzaman</span>
        </div>
      </div>
    </div>
  );
}
