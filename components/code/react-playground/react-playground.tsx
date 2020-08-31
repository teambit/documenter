import React from "react";
import classNames from "classnames";
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from "react-live";
import prismTheme from "prism-react-renderer/themes/oceanicNext";
import { Error as errorClass } from "@teambit/base-ui.input.error";
import styles from "./react-playground.module.scss";

export type CodeScope = { [key: string]: any };

export type PlaygroundProps = {
  /** stringified version of the example */
  code: string;
  /** any dependencies required by the code example */
  scope?: CodeScope;
};

export function Playground({ code, scope }: PlaygroundProps) {
  return (
    <LiveProvider code={code} scope={scope} theme={prismTheme}>
      <div className={styles.playground}>
        <LiveEditor
          className={classNames(styles.editor)}
          style={{fontFamily: 'Roboto mono'}}
        />
        <div className={styles.previewBox}>
          <LivePreview
            className={classNames(styles.preview)}
          />
          <LiveError className={classNames(errorClass, styles.error)} />
        </div>
      </div>
    </LiveProvider>
  );
}
