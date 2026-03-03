import Link from "next/link";
import { Home, Briefcase, FolderGit2, User } from "lucide-react";

const nav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  { href: "/about", label: "About", icon: User },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="font-semibold tracking-tight">
          Wyndham Woo
        </Link>

        <nav className="flex items-center gap-2">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}