import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BankOutline.svg';

export function BankOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BankOutline">
      <SVG />
    </Icon>
  );
}
