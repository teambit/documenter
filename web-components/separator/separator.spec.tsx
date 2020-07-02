import { newSpecPage } from "@stencil/core/testing";
import { Separator } from "./separator";

it("should render my component", async () => {
  const page = await newSpecPage({
    components: [Separator],
    html: `<separator-component></separator-component>`,
  });

  expect(page.root).toEqualHtml(`
    <separator-component>
      <hr class="separator"></hr>
    </separator-component>
  `);
});
