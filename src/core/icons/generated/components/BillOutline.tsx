import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BillOutline.svg';

export function BillOutline(props: TProps) {
  return (
    <Icon {...props} name="BillOutline">
      <SVG />
    </Icon>
  );
}
