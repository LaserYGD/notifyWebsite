import Image from "next/image";
import NavBar from "../components/navBar";

export default function download() {
  return (
    <div>
      <NavBar />
      <p className="light">Mac & Linux support is coming soon!</p>
      <p className="light">this will download the latest version by default</p>
      <p className="light">Click on the image to download</p>
      <div id="downloadWindows">
        <h1 className="downloadText">Download for windows</h1>
        <a href="https://github.com/LaserYGD/twitchNotify/releases/download/release/twitchNotify.Setup.0.8.0.exe" target="_blank">
          <Image src="/windowsLogo.png" alt="picture of the program's condition settings window" id="conditionImage" width={180} height={150}></Image>
        </a>
      </div>

      <div id="downloadLinux">
        <h1 className="downloadText">Download for Linux</h1>
        <Image src="/linuxLogo3.png" alt="picture of the program's condition settings window" id="conditionImage" width={200} height={150}></Image>
      </div>
    </div>
  );
}
