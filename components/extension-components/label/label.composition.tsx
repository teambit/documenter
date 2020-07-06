import React from "react";
import { Label } from "./label";
import { PossibleSizes } from "@bit/bit.base-ui.theme.sizes";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";

export const LargeText = () => {
  return (
    <ClientContext>
      <Label>label</Label>
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
