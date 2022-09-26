import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AccountDetailSolid.svg';

export function AccountDetailSolid(props: TProps) {
  return (
    <Icon {...props} name="AccountDetailSolid">
      <SVG />
    </Icon>
  );
}
