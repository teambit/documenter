import React from "react";
import { Label } from "./label";
import { PossibleSizes } from "@teambit.base-ui.theme.sizes";
import { ThemeContext } from "@bit/bit.test-scope.theme.theme-context";

export const LightLabel = () => {
  return (
    <ThemeContext>
      <Label>light label</Label>
    </ThemeContext>
  );
};
export const DarkLabel = () => {
  return (
    <ThemeContext>
      <Label style={{backgroundColor: '#414141', color: 'white'}}>dark label</Label>
    </ThemeContext>
  );
};

// export function SmallText() {
//   return (
//     <HighlightedText element="p" size={PossibleSizes.sm}>
//       Small highlighted text.
//     </HighlightedText>
//   );
// }

// SmallText.canvas = {
//   width: 300,
// };
