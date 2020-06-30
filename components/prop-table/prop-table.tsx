import React from "react";
import classNames from "classnames";
import { H5 } from "@bit/bit.evangelist.elements.heading";
import { PossibleSizes } from "@bit/bit.base-ui.theme.sizes";
import { Grid } from "@bit/bit.base-ui.layout.grid-component";
import { HighlightedText } from "@bit/bit.test-scope.ui.highlighted-text";
import styles from "./prop-table.module.scss";

type Row = {
  name: string;
  type: string;
  description: string;
  required: boolean;
  defaultValue: string;
};

type TableProps = {
  headings: string[];
  rows: Row[];
};

export function PropTable({headings, rows}: TableProps) {
    
  return (
    <div>
      <Grid col={4} className={classNames(styles.titleRow)}>
        {headings.map((title: string, index: number) => {
          if (title === "required") return;
          return (
            <H5
            key={index}
              className={classNames(styles.rowGrid, styles.title)}
              size={PossibleSizes.xxs}
            >
              {title}
            </H5>
          );
        })}
      </Grid>
      {rows.map((row: Row, index: number) => {
        return (
          <Grid colXs={4} key={index} className={classNames(styles.propRow)}>
            {Object.keys(row).map((title, index) => {
              if (title === "required") return;
              if (title === "name") {
                return (
                  <div key={index} className={styles.column}>
                    <div className={styles.name}>{row[title]}</div>
                    {row["required"] && (
                      <div className={styles.required}>(Required)</div>
                    )}
                  </div>
                );
              }
              if (title === "type") {
                return (
                  <div key={index} className={styles.column}>
                      <HighlightedText size={PossibleSizes.xs} key={index} >{row[title]}</HighlightedText>
                  </div>
                );
              }
              return (
                <div key={index} className={styles.column}>
                  {row[title]}
                </div>
              );
            })}
          </Grid>
        );
      })}
    </div>
  );
}
