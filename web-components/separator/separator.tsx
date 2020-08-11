import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "separator-component",
  // styleUrl: "separator.scss",
  scoped: true,
})
export class Separator {
  render() {
    return (
      <Host>
        <hr class="separator"></hr>
      </Host>
    );
  }
}
