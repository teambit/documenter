import React from 'react';
import classnames from 'classnames';
import {Label} from '@teambit/documenter.ui.label';
import styles from './label-list.module.scss';

type LabelListProps = {
  /**
   * onClick function when selecting a label
   */
  onPick?: (label: string) => any;
  /**
   * content array to be presented inside the labels
   */
  children: string[];
  /**
   * override label class
   */
  labelClass?: string;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * 
 * Renders an array of labels
 */
export function LabelList({children, className, labelClass, onPick, ...rest}: LabelListProps) {

  return (
    <div {...rest} className={classnames(className, styles.labelList)}>
      {children &&
        children.map((label: string) => (
          <Label className={labelClass} key={label} onPick={onPick}>
            {label}
          </Label>
        ))}
    </div>
  );
}
