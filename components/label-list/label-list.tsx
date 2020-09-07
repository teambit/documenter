import React from 'react';
import classnames from 'classnames';
import {Label} from '@teambit/documenter.ui.label';
import styles from './label-list.module.scss';

type LabelListProps = {
  onPick?: (label: string) => any;
  children: string[];
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * 
 * Renders an array of labels
 */
export function LabelList({children, className, onPick, ...rest}: LabelListProps) {

  return (
    <div {...rest} className={classnames(className, styles.labelList)}>
      {children &&
        children.map((label: string) => (
          <Label key={label} onPick={onPick}>
            {label}
          </Label>
        ))}
    </div>
  );
}
