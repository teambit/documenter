import React from 'react';
import classnames from 'classnames';
import {Label} from '@bit/bit.test-scope.ui.label';
import styles from './label-list.module.scss';

type LabelListProps = {
  onPick?: (label: string) => any;
  children?: string[];
} & React.InputHTMLAttributes<HTMLDivElement>;

export function LabelList(props: LabelListProps) {
  const { children, className, onPick, ...rest } = props;

  return (
    <div {...rest} className={classnames(className, styles.labelList)}>
      {children &&
        children.map(x => (
          <Label key={x} onPick={props.onPick}>
            {x}
          </Label>
        ))}
    </div>
  );
}
