import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ColumnsOutline.svg';

export function ColumnsOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ColumnsOutline">
      <SVG />
    </Icon>
  );
}
