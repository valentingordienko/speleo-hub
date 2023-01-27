import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AccountSolid.svg';

export function AccountSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="AccountSolid">
      <SVG />
    </Icon>
  );
}
