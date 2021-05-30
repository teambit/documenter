import { ThemeCompositions } from "@teambit/documenter.theme.theme-compositions";
import { List } from "./list";

export const labels = ['react', 'ui-component', 'list', 'ol', 'ul']

const scope = { List, ThemeCompositions };

export const examples = [
    {
    scope,
    title: "Using the CopyBox component.",
    description: "The List component receives an array and renders a list. Choose between an ordered list and an unordered list.",
    code: `
<ThemeCompositions>
// Ordered list
    <List element='ol'>
        {['First', 'Second', 'Third', 'Fourth']}
    </List>

// Unordered list
<List>
    {['Audi', 'Hyundai', 'Honda', 'Tesla']}
</List>
</ThemeCompositions>
`},
{
    scope,
    description: "Customize the spacing between the list items.",
    code: `
<ThemeCompositions>

    // Small spacing
    <List spacing='sm'>
        {['Audi', 'Hyundai', 'Honda', 'Tesla']}
    </List>

    // Large spacing
    <List spacing='lg'>
        {['Audi', 'Hyundai', 'Honda', 'Tesla']}
    </List>

</ThemeCompositions>
`},
{
    scope,
    description: "Use the List component recursively.",
    code: `
<ThemeCompositions>
    <List element='ol'>
        {[
        'One',
        'Two',
        'Three',
            <List element='ol'>
                {[
                    'Three and a half',
                    'Four'
                ]}
            </List>
        ]}
    </List>
</ThemeCompositions>
`}
]

