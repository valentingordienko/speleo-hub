import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CashOutline.svg';

export function CashOutline(props: TProps) {
  return (
    <Icon {...props} name="CashOutline">
      <SVG />
    </Icon>
  );
}
