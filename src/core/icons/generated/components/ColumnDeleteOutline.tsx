import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ColumnDeleteOutline.svg';

export function ColumnDeleteOutline(props: TProps) {
  return (
    <Icon {...props} name="ColumnDeleteOutline">
      <SVG />
    </Icon>
  );
}
