import React, { ReactNode, ComponentType, PureComponent } from 'react';
import { Layout } from '@bit/bit.rendering.constants.layouts';

import SplitPane, { SplitApi } from '@teambit/base-ui-temp.surfaces.split-pane';
import { SplitterProps } from '@teambit/base-ui-temp.surfaces.splitter/splitter-props';
import {Pane} from '@teambit/base-ui-temp.surfaces.split-pane';
import { FatSplitter } from '@teambit/base-ui-temp.surfaces.fat-splitter';

type Props = {
	ratio?: number;
	max?: number;
	min?: number;
	layout: Layout;
	Splitter: ComponentType<SplitterProps>;
	children: [ReactNode, ReactNode];
};

type State = {
	layoutOverride: Layout | undefined;
};

export class TupleSplitPane extends PureComponent<Props> {
	state: State = {
		layoutOverride: undefined,
	};
	
	setLayout = (layout?: Layout) => {
		this.setState({ layoutOverride: layout });
	};

	private get layout() {
		const { layout } = this.props;
		const { layoutOverride } = this.state;

		return layoutOverride || layout;
	}

	render() {
		
	const { min, max, ratio, Splitter = FatSplitter, children } = this.props;
		const { layout, setLayout } = this;

		const [firstChild, secondChild] = children;

		return (
			<SplitPane layout={layout} min={min} max={max} ratio={ratio}>
				{({ isDragging, ratio, startDrag }: SplitApi) => (
					<>
						<Pane size={ratio}>
							{firstChild}
						</Pane>

						<Splitter
							layout={layout}
							onDragStarted={startDrag}
							onLayoutChange={setLayout}
						/>

						<Pane size={100 - ratio}>
							{secondChild}
						</Pane>
					</>
				)}
			</SplitPane>
		);
	}
}
