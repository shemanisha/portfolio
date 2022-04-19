import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from "../../../utilities/commonUtils";
import ScrollService from "../../../utilities/ScrollService";
import { faBars } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);
  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) {
      return;
      let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
      if (screenIndex < 0) return;
    }
    let currentScreenSubscription =
      ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);
  };
  return <div></div>;
}
