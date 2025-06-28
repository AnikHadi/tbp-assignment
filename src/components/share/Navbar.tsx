import Link from "next/link";

export default function Navbar() {
  const session = true;
  return (
    <div className="main-container py-5 flex justify-between items-center">
      <Link href="/" className=" text-gray-100">
        <span className="text-5xl font-bold">T</span>
        <span className="text-5xl font-bold text-teal-400">B</span>
        <span className="text-5xl font-bold">P</span>
      </Link>

      <div className="flex gap-10 items-center lg:text-xl">
        <div className="flex gap-5">
          <Link href="/discover">Discover</Link>
          <Link href="/destination">Destination</Link>
          <Link href="/trip-plan">Trip Plan</Link>
          <Link href="/about-us">About Us</Link>
        </div>
        <div className="flex gap-5 items-center">
          <div>
            <select name="language" id="language">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Punjabi">Punjabi</option>
            </select>
          </div>
          {session ? (
            <Link href="/profile">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
                className="w-10 h-10 rounded-full"
              />
            </Link>
          ) : (
            <Link href="/sign-in">Sign In</Link>
          )}
        </div>
      </div>
    </div>
  );
}
