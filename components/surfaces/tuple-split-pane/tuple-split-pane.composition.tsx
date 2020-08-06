import React from 'react';
import { TupleSplitPane } from './tuple-split-pane';
import {Layout} from '@teambit/base-ui-temp.layout.split-pane-layout';
import { FatSplitter } from '@teambit/base-ui-temp.surfaces.fat-splitter';

export const bla = () => {
    return (
        <div>
            <TupleSplitPane max={100} min={10} ratio='200px' layout={Layout.row} Splitter={FatSplitter}>
                <div><div>left</div></div>
                <div><div>right</div></div>
            </TupleSplitPane>
        </div>
    )
}