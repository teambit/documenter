import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { ImportAction } from './import-action';

export const ImportActionExample = () => {
  return (
    <ThemeCompositions>
      <div style={styles}>
        <ImportAction
          componentName="Import-action"
          bitLink="teambit.documenter/ui/import-action"
          packageLink="@teambit/documenter.ui.import-action"
          registryName="@teambit"
          Link={(props: any) => <a {...props} />}
        />
      </div>
    </ThemeCompositions>
  );
};

ImportActionExample.canvas = {
  height: '300px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
};
const styles = {
  width: '400px',
};
