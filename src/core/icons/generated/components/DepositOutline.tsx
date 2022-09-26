import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DepositOutline.svg';

export function DepositOutline(props: TProps) {
  return (
    <Icon {...props} name="DepositOutline">
      <SVG />
    </Icon>
  );
}
