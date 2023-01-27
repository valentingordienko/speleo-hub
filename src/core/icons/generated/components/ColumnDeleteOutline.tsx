import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ColumnDeleteOutline.svg';

export function ColumnDeleteOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ColumnDeleteOutline">
      <SVG />
    </Icon>
  );
}
