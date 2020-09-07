import {useState} from 'react';
import { CopiedMessage } from "@teambit/documenter.ui.copied-message"
import { ThemeContext } from "@teambit/documenter.theme.theme-context"
import { Icon } from "@teambit/evangelist-temp.elements.icon";

export const labels = ['react', 'ui-component']

export const abstract = 'Indicates when a text has been copied.'

export const examples = [
    {
    scope: {
        CopiedMessage,
        Icon,
        ThemeContext,
        useState
    },
    title: "Using the Copied Message component",
    description: "Use it to indicate when a text has been copied.",
    code: `
    () => {
        const [isCopied, setIsCopied] = useState(false);
        
        const handleClick = () => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        };
        return (
          <ThemeContext>
            <div style={{position: 'relative', width: 205}}>       
                <p style={{display: 'inline'}}>Click on the icon to copy!</p>
                <CopiedMessage show={isCopied} style={{top: 0}} />
                <Icon 
                    of="copy-cmp" 
                    onClick={handleClick}
                    style ={{paddingLeft: "5px"}} 
                    />
            </div>
          </ThemeContext>
        );
      };
`}
]

// export const HiddenCopiedMessageExample = () => {
//     const [isCopied, setIsCopied] = useState(false);
    
//     const handleClick = () => {
//       setIsCopied(true);
//       setTimeout(() => setIsCopied(false), 2000);
//     };
//     return (
//       <ThemeContext>
//         <div>
//             <p>Click on the icon to copy!</p>
//             <Icon onClick={handleClick} of="copy-cmp" />
//             <CopiedMessage show={isCopied} />
//         </div>
//       </ThemeContext>
//     );
//   };