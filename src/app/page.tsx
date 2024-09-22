import Image from "next/image";
import Api from "./Api/page";
import Navbars from "./components/Navbar";

export default function Home() {
  return (
 <div>
  <Navbars/>
  <Api/>
 </div>
  );
}
