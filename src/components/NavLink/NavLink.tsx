import Link from "next/link";
import { useRouter } from "next/router";

function NavLink({ href, label }: { href: string; label: string }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={`relative px-3 py-2 text-lg font-medium transition-colors duration-300 
        ${isActive ? "text-blue-600" : "text-black hover:text-blue-500"}`}
    >
      {label}
      {/* underline */}
      <span
        className={`absolute left-0 bottom-0 h-[2px] w-full bg-blue-600 
          transition-transform duration-300 origin-left 
          ${isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"}`}
      />
    </Link>
  );
}

export default NavLink;