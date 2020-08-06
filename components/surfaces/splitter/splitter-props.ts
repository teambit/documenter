import { Layout } from '@teambit/base-ui-temp.layout.split-pane-layout';

export type SplitterProps = {
	layout: Layout;
	className?: string;
	onDragStarted: () => void;
	onLayoutChange?: (nextLayout?: Layout) => void;
};
