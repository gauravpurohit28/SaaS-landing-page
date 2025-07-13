import acmeLogo from "@/assets/logo-acme.png"
import quantLogo from "@/assets/logo-quantum.png"
import echoLogo from "@/assets/logo-echo.png"
import celestialLogo from "@/assets/logo-celestial.png"
import pulseLogo from "@/assets/logo-pulse.png"
import apexLogo from "@/assets/logo-apex.png"
import Image from "next/image"

export const LogoTicker = () => {
  return <div className="py-8 md:py-12 bg-white ">
    <div className="container">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
      <div className="flex gap-14 flex-none animate-scroll">
        {[acmeLogo, quantLogo, echoLogo, celestialLogo, pulseLogo, apexLogo].map((logo, i) => (
        <Image key={i} src={logo} alt="logo" className="logo-ticker" />
        ))}
        {[acmeLogo, quantLogo, echoLogo, celestialLogo, pulseLogo, apexLogo].map((logo, i) => (
        <Image key={`dup-${i}`} src={logo} alt="logo" className="logo-ticker" />
        ))}
      </div>
      </div>
    </div>

  </div>;
};
