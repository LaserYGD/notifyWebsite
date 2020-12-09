import Head from "next/head";
import NavBar from "../components/navBar";
import Image from "next/image";
import styled from "styled-components";

const flexDiv = styled.div`
  display: flex;
`;

const flex110 = styled.div`
  flex: 1 5 %0;
`;

export default function Home() {
  return (
    <div>
      <title>TwitchNotify - Track Twitch Catagories by views and set conditions!</title>
      <NavBar />

      <div id="flex-container">
        <div className="flex-item first-page-text" id="first-page-text">
          {" "}
          <p>
            Imagine a world where you can set a condition on any catagory/game for Twitch. <br></br> A world where you'd get a notification when that
            condition is true. <br></br>
            <br></br> The impossible has become possible, the greatest random application that no sane person would spend their time on making is
            finally here. <br></br> <br></br> We call it, TwitchNotify. <br></br>
            <span id="why">Because it notifies you, get it? I admit, took me two seconds and one braincell to think of this name.</span>
          </p>
        </div>

        <div className="flex-item view-image">
          <Image
            src="/conditionSettings.png"
            alt="picture of the program's condition settings window"
            id="conditionImage"
            width={450}
            height={420}
          ></Image>
          <p className="light view-image">
            Custom view conditions<br></br> Cooldown system to prevent notification spam <br></br> Almost all catagories supported <br></br>Our server
            tracks and updates all catagories continuously<br></br>Your games & settings are locally saved
          </p>
        </div>
      </div>
    </div>
  );
}

/*

  <div className="relative top-100 width-585">
          <span>
            Imagine a world where you can set a condition on any catagory/game for Twitch. <br></br> A world where you'd get a notification when that
            condition is true. <br></br>
            <br></br> The impossible has become possible, the greatest random application that no sane person would spend their time on making is
            finally here. <br></br> <br></br> We call it, TwitchNotify.
          </span>

          <Image
            src="/conditionSettings.png"
            alt="picture of the program's condition settings window"
            id="conditionImage"
            width={421}
            height={430}
          ></Image>
        </div>

        <div className="relative  top-250">
          <Image
            src="/conditionSettings.png"
            alt="picture of the program's condition settings window"
            id="conditionImage"
            width={421}
            height={430}
          ></Image>
        </div>
      </div>

      */
