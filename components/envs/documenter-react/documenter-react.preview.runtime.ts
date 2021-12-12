import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

import { DocumenterReactAspect } from './documenter-react.aspect';

export class DocumenterReactPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const documenterReactPreviewMain = new DocumenterReactPreviewMain();
    // uncomment the line below to register a new provider to wrap all compositions using this environment with a custom theme.
    react.registerProvider([ThemeCompositions]);

    return documenterReactPreviewMain;
  }
}

DocumenterReactAspect.addRuntime(DocumenterReactPreviewMain);
