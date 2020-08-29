import { ThemeContext } from "@teambit/documenter-temp.theme.theme-context";
import { Paragraph } from "./paragraph";

export const labels = ['react', 'ui-component', 'text', 'paragraph', 'div', 'span'];

const scope = {Paragraph, ThemeContext};

export const examples = [
    {
    scope,
    title: "Using the Paragraph component.",
    description: "The Paragraph component renders a text as either a 'p', 'div' or 'span' element.",
    code: `
<ThemeContext>
    <Paragraph element="p" >
        This is a 'p' element.
    </Paragraph>
    <Paragraph element="div" >
        This is a 'div' element.
    </Paragraph>
    <Paragraph element="span" >
        This is a 'span' element.
    </Paragraph>
</ThemeContext>
`},
{
    scope,
    description: "Selecting a font size.",
    code: `
<ThemeContext>
    <Paragraph size="xxm" >
        This is an xx-small font.
    </Paragraph>
    <Paragraph size="md" >
        This is a medium size font.
    </Paragraph>
    <Paragraph size="xl" >
        This is an extra large font.
    </Paragraph>
</ThemeContext>
`}
]