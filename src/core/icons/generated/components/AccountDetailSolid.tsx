import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AccountDetailSolid.svg';

export function AccountDetailSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="AccountDetailSolid">
      <SVG />
    </Icon>
  );
}
