import {
  MenuLeft,
  Nav,
  ExperimentalMenu
} from "terriajs/lib/ReactViews/StandardUserInterface/customizable/Groups";
import MenuItem from "terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuItem";
import PropTypes from "prop-types";
import React from "react";
import SplitPoint from "terriajs/lib/ReactViews/SplitPoint";
import StandardUserInterface from "terriajs/lib/ReactViews/StandardUserInterface/StandardUserInterface";
import version from "../../version";

import "./global.scss";

// function loadAugmentedVirtuality(callback) {
//   require.ensure(
//     "terriajs/lib/ReactViews/Map/Navigation/AugmentedVirtualityTool",
//     () => {
//       const AugmentedVirtualityTool = require("terriajs/lib/ReactViews/Map/Navigation/AugmentedVirtualityTool");
//       callback(AugmentedVirtualityTool);
//     },
//     "AugmentedVirtuality"
//   );
// }

// function isBrowserSupportedAV() {
//   return /Android|iPhone|iPad/i.test(navigator.userAgent);
// }

export default function UserInterface(props) {
  return (
    <StandardUserInterface {...props} version={version}>
      <MenuLeft>
        <MenuItem caption="About" href="https://concord.org/our-work/research-projects/tecrocks/" key="about-link" />
      </MenuLeft>
    </StandardUserInterface>
  );
}

UserInterface.propTypes = {
  terria: PropTypes.object,
  viewState: PropTypes.object
};
