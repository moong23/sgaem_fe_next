import ServiceLogo_Black from "@/assets/Icons/ServiceLogo.svg";
// import ServiceLogo_White from "@/assets/Icons/ServiceLogo_White.svg";
import Image from "next/image";
import { HeaderMenuItems, HeaderAuthMenuItems } from "./constants";
import Link from "next/link";
import { useAuth } from "@/utils/hooks/useAuth";

const Header = () => {
  const { isAuth: isAuthorized } = useAuth();

  return (
    <header className="flex justify-center w-full h-12 bg-white pc:h-20 dark:bg-sky-950 dark:text-white">
      {/* PC 화면 기준 헤더 */}
      <div className="hidden w-content pc:flex pc:flex-row pc:justify-between">
        <div className="flex h-full gap-10">
          <span className="relative h-full aspect-square">
            <Image
              src={ServiceLogo_Black}
              alt="Sgaem Logo"
              fill
              className="dark:hidden"
            />
            {/* TODO: White Image 새로 구해서 다시 넣기 */}
            {/* <Image
              src={ServiceLogo_White}
              alt="Sgaem Logo"
              fill
              // className="hidden dark:flex"
            /> */}
          </span>
          <span className="flex items-center w-auto h-full gap-8">
            {HeaderMenuItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="flex items-center px-2 rounded-md cursor-pointer h-4/5 hover:bg-slate-200"
              >
                {item.name}
              </Link>
            ))}
          </span>
        </div>
        <div className="flex flex-row gap-8">
          {HeaderAuthMenuItems.filter(
            (item) => item.isAuth === isAuthorized
          ).map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="flex items-center h-full px-2 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile 화면 기준 헤더 */}
      <div className="flex w-full h-full pc:hidden">Mobile Header</div>
    </header>
  );
};

export default Header;
