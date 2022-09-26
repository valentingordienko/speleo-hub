import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BankOutline.svg';

export function BankOutline(props: TProps) {
  return (
    <Icon {...props} name="BankOutline">
      <SVG />
    </Icon>
  );
}
