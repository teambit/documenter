import React from 'react';
import { TupleSplitPane } from './tuple-split-pane';
import {Layout} from '@teambit/base-ui-temp.layout.split-pane-layout';
import { FatSplitter } from '@teambit/base-ui-temp.surfaces.fat-splitter';

export const bla = () => {
    return (
        <div>
            <TupleSplitPane max={100} min={0} layout={Layout.row} Splitter={FatSplitter}>
                <div><div>fdf</div></div>
                <div><div>fdf</div></div>
            </TupleSplitPane>
        </div>
    )
}