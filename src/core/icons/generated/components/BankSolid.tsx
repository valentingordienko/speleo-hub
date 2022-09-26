import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BankSolid.svg';

export function BankSolid(props: TProps) {
  return (
    <Icon {...props} name="BankSolid">
      <SVG />
    </Icon>
  );
}
