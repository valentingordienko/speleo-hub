import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RowDeleteOutline.svg';

export function RowDeleteOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="RowDeleteOutline">
      <SVG />
    </Icon>
  );
}
