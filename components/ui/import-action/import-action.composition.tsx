import React from 'react';
import { ImportAction } from './import-action';

export const ImportActionExample = () => {
  return (
    <div style={{ width: '400px' }}>
      <ImportAction
        componentName="Import-action"
        bitLink="teambit.documenter/ui/import-action"
        packageLink="@teambit/documenter.ui.import-action"
        registryName="@teambit"
        Link={(props: any) => <a {...props} />}
      />
    </div>
  );
};

ImportActionExample.canvas = {
  height: '300px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
};
