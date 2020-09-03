import React from "react";
import classNames from "classnames";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import {
  SplitPane,
  Pane,
  Layout,
} from "@teambit/base-ui.surfaces.split-pane.split-pane";
import { HoverSplitter } from "@teambit/base-ui.surfaces.split-pane.hover-splitter";
import useDimensions from "react-use-dimensions";
import { useDebounce } from "use-debounce";
import prismTheme from "prism-react-renderer/themes/oceanicNext";
import { Error as errorClass } from "@teambit/base-ui.input.error";
import styles from "./react-playground.module.scss";

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
};

/**
 *
 * A react-live wrapper with document oriented features.
 */
export function Playground({ code, scope, style, ...rest }: PlaygroundProps) {
  const [ref, { width }] = useDimensions();
  const debouncedSize = useDebounce(width, 300, { leading: true });
  const placement =
    +debouncedSize[0] <= 500 ? Layout.columnReverse : Layout.row;
  const isInColumnView = placement === "column reverse";

  if (!width) return <div ref={ref} />;

  return (
    <LiveProvider code={code} scope={scope} theme={prismTheme}>
      <div style={style} ref={ref} className={styles.playground}>
        <SplitPane className={styles.main} size={"50%"} layout={placement}>
          <Pane
            className={classNames(
              styles.codePane,
              isInColumnView && styles.column
            )}
          >
            <div className={styles.editorWrapper}>
              <LiveEditor className={classNames(styles.editor)} />
            </div>
          </Pane>
          <HoverSplitter className={styles.splitter}></HoverSplitter>
          <Pane
            className={classNames(
              styles.previewPane,
              isInColumnView && styles.column
            )}
          >
            <div className={styles.previewBox}>
              <LivePreview />
              <LiveError
                className={classNames(
                  errorClass,
                  styles.error,
                  isInColumnView && styles.column
                )}
              />
            </div>
          </Pane>
        </SplitPane>
      </div>
    </LiveProvider>
  );
}
