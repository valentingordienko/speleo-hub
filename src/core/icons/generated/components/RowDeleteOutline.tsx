import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RowDeleteOutline.svg';

export function RowDeleteOutline(props: TProps) {
  return (
    <Icon {...props} name="RowDeleteOutline">
      <SVG />
    </Icon>
  );
}
