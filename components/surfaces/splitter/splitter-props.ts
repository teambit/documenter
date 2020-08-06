import { Layout } from '@bit/bit.rendering.constants.layouts';

export type SplitterProps = {
	layout: Layout;
	className?: string;
	onDragStarted: () => void;
	onLayoutChange?: (nextLayout?: Layout) => void;
};
