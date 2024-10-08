import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import dynamic from "next/dynamic";
// import DarkModeSwitch from "./DarkModeSwitch";
const DarkModeSwitch = dynamic(() => import('./DarkModeSwitch'))

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-width-6x mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
          <Link href="/" className="flex gap-1 items-center">
            <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
              Movies
            </span>
            <span className="text-xl hidden sm:inline">Mod</span>
          </Link>
        
      </div>
    </div>
  );
}
