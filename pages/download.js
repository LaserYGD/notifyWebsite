import Image from "next/image";
import NavBar from "../components/navBar";

export default function download() {
  return (
    <div>
      <NavBar />
      <p className="light">Mac & Linux support is coming soon!</p>
      <p className="light">
        TwitchNotify is a 'hmm' hobby project. Thus isn't signed (requires $$). Smartscreen or Antivirus will give you a false positive.
      </p>
      <p className="light">Click on the image to download</p>
      <div>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div id="downloadWindows">
        <h1 className="downloadText">Download for windows</h1>
        <a href="https://github.com/LaserYGD/twitchNotify/releases/download/release/twitchNotify.Setup.0.8.0.exe" target="_blank">
          <Image src="/windowsLogo.png" alt="picture of the program's condition settings window" id="conditionImage" width={180} height={150}></Image>
        </a>
      </div>
    </div>
  );
}

//the the pure <br> tag makes you want to shoot me. Then unload an entire mag on me to make sure it was done. I know.
/* <div id="downloadLinux">
        <h1 className="downloadText">Download for Linux</h1>
        <Image src="/linuxLogo3.png" alt="picture of the program's condition settings window" id="conditionImage" width={200} height={150}></Image>
      </div>*/
