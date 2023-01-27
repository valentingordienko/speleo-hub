import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BankSolid.svg';

export function BankSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="BankSolid">
      <SVG />
    </Icon>
  );
}
