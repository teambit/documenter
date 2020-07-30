import React from "react";
import { Label } from "./label";
import { PossibleSizes } from "@bit/bit.base-ui.theme.sizes";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";

export const LightLabel = () => {
  return (
    <ClientContext>
      <Label>light label</Label>
    </ClientContext>
  );
};
export const DarkLabel = () => {
  return (
    <ClientContext>
      <Label style={{backgroundColor: '#414141', color: 'white'}}>dark label</Label>
    </ClientContext>
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
