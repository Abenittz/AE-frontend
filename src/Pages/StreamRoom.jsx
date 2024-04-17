import * as React from "react";
import { ZIM } from "zego-zim-web";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function randomID(len) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

export default function App() {
  const roomID = getUrlParams().get("roomID") || randomID(5);
  let role_str = getUrlParams(window.location.href).get("role") || "Host";
  const role =
    role_str === "Host"
      ? ZegoUIKitPrebuilt.Host
      : role_str === "Cohost"
      ? ZegoUIKitPrebuilt.Cohost
      : ZegoUIKitPrebuilt.Audience;

  let sharedLinks = [];
  if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
    sharedLinks.push({
      name: "Join as co-host",
      url:
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?roomID=" +
        roomID +
        "&role=Cohost",
    });
  }
  sharedLinks.push({
    name: "Join as audience",
    url:
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?roomID=" +
      roomID +
      "&role=Audience",
  });
  // generate Kit Token
  const appID = 1168750159;
  const serverSecret = "0259a6ca2997dbb9c4795dd97b5c9b5c";
  const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID,
    serverSecret,
    roomID,
    randomID(5),
    randomID(5)
  );

  // start the call
  let myMeeting = async (element) => {
    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.addPlugins({ ZIM });
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: {
          role,
        },
      },
      sharedLinks,
      showMakeCohostButton: true, // Whether to show the button that is used to invite the audience to co-host on the host end.
      showRemoveCohostButton: true, // Whether to show the button that is used to remove the audience on the host end.
      showRequestToCohostButton: true,
    });
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
}
