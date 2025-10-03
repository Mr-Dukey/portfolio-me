import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void; // optional for mobile menu toggle
}

function NavLink({ href, label, onClick }: NavLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        relative px-3 py-2 text-lg font-medium transition-all duration-300
        ${isActive ? "text-blue-600 scale-105" : "text-black hover:text-blue-500 hover:scale-105"}
      `}
    >
      {label}
      {/* Underline animation */}
      <span
        className={`
          absolute left-0 bottom-0 h-[2px] w-full bg-blue-600
          transition-transform duration-300 origin-left
          ${isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"}
        `}
      />
    </Link>
  );
}

export default NavLink;
