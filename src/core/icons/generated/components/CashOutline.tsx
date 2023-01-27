import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CashOutline.svg';

export function CashOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CashOutline">
      <SVG />
    </Icon>
  );
}
