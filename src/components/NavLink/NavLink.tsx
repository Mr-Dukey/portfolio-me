import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

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
        relative px-4 py-2 text-sm md:text-base font-semibold transition-all duration-300
        ${isActive ? "text-cyan-400" : "text-white/70 hover:text-white"}
      `}
    >
      {label}
      {/* Underline animation */}
      <span
        className={`
          absolute left-4 right-4 bottom-1 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500
          transition-transform duration-300 origin-left
          ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
        `}
      />
      {isActive && (
        <motion.span
          layoutId="nav-underline"
          className="absolute inset-0 bg-white/5 rounded-xl -z-10"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  );
}


export default NavLink;
