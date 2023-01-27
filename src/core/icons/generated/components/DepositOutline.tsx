import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DepositOutline.svg';

export function DepositOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DepositOutline">
      <SVG />
    </Icon>
  );
}
