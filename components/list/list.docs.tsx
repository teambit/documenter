import { ThemeContext } from "@teambit/documenter-temp.theme.theme-context";
import { List } from "./list";

export const labels = ['react', 'ui-component', 'list', 'ol', 'ul']

const scope = { List, ThemeContext };

export const examples = [
    {
    scope,
    title: "Using the CopyBox component.",
    description: "The List component recieves an array and renders a list. Choose between an ordered list and an unordered list.",
    code: `
<ThemeContext>
// Ordered list
    <List element='ol'>
        {['First', 'Second', 'Third', 'Fourth']}
    </List>

// Unordered list
<List>
    {['Audi', 'Hyundai', 'Honda', 'Tesla']}
</List>
</ThemeContext>
`},
{
    scope,
    description: "Customize the spacing between the list items.",
    code: `
<ThemeContext>

    // Small spacing
    <List spacing='sm'>
        {['Audi', 'Hyundai', 'Honda', 'Tesla']}
    </List>

    // Large spacing
    <List spacing='lg'>
        {['Audi', 'Hyundai', 'Honda', 'Tesla']}
    </List>

</ThemeContext>
`},
{
    scope,
    description: "Use the List component recursively.",
    code: `
<ThemeContext>
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
</ThemeContext>
`}
]

