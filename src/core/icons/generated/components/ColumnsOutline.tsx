import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ColumnsOutline.svg';

export function ColumnsOutline(props: TProps) {
  return (
    <Icon {...props} name="ColumnsOutline">
      <SVG />
    </Icon>
  );
}
