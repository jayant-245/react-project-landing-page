import { footerCols } from "../../utils/content";
import Logo from "../icons/Logo";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-bottom text-primary-50">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_3fr] gap-12 lg:gap-24">
          {/* Logo and Info */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-3">
              <Logo className="stroke-primary-500 h-7 w-auto" />
              <span className="text-2xl font-bold tracking-tight">NoteFlow</span>
            </a>
            <p className="text-primary-100 text-sm max-w-sm leading-relaxed">
              NoteFlow helps professionals streamline note-taking with AI-powered features for productivity and clarity.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
            {footerCols.map((col) => (
              <div key={col.id}>
                <h4 className="text-lg font-semibold mb-4">{col.category}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-primary-50 text-sm hover:text-primary-500 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-100">
          <p>&copy; {new Date().getFullYear()} NoteFlow. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-primary-500 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
