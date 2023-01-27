import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BillOutline.svg';

export function BillOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BillOutline">
      <SVG />
    </Icon>
  );
}
