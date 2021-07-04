import React, { useMemo } from 'react';
import classNames from 'classnames';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import {
  SplitPane,
  Pane,
  Layout,
} from '@teambit/base-ui.surfaces.split-pane.split-pane';
import { HoverSplitter } from '@teambit/base-ui.surfaces.split-pane.hover-splitter';
// @ts-ignore - missing types
import useDimensions from 'react-use-dimensions';
import { useDebounce } from 'use-debounce';
import prismTheme from 'prism-react-renderer/themes/oceanicNext';
import { Error as errorClass } from '@teambit/base-ui.input.error';
import styles from './react-playground.module.scss';

export type CodeScope = { [key: string]: any };

export type PlaygroundProps = {
  /**
   * stringified version of the example
   */
  code: string;
  /**
   * any dependencies required by the code example
   */
  scope?: CodeScope;
  /**
   * css inline styles object to override the outer styles of the playground
   */
  style?: React.CSSProperties;
  /** class name of the wrapping element */
  className?: string;
};

/**
 *
 * A react-live wrapper with document oriented features.
 */
export function Playground({
  code,
  scope,
  style,
  className,
  ...rest
}: PlaygroundProps) {
  // don't show trailing new line at the end of the file
  const _code = useMemo(
    () => code?.toString().replace(/\n$/, '').trim(),
    [code]
  );

  const [ref, { width }] = useDimensions();
  const debouncedSize = useDebounce(width, 300, { leading: true });

  const isColumn = +debouncedSize[0] <= 500;
  const placement = isColumn ? Layout.columnReverse : Layout.row;

  if (!width) return <div ref={ref} />;

  return (
    <LiveProvider code={_code} scope={scope} theme={prismTheme}>
      <div
        ref={ref}
        className={classNames(
          className,
          styles.playground,
          isColumn ? styles.column : styles.row
        )}
        {...rest}
      >
        <SplitPane className={styles.main} size={'50%'} layout={placement}>
          <Pane className={classNames(styles.codePane)}>
            <LiveEditor className={classNames(styles.editor)} />
          </Pane>
          <HoverSplitter className={styles.splitter}></HoverSplitter>
          <Pane className={classNames(styles.previewPane)}>
            <>
              <LivePreview className={styles.previewBox} />
              <LiveError className={classNames(errorClass, styles.error)} />
            </>
          </Pane>
        </SplitPane>
      </div>
    </LiveProvider>
  );
}
