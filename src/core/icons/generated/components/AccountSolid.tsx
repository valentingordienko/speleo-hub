import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AccountSolid.svg';

export function AccountSolid(props: TProps) {
  return (
    <Icon {...props} name="AccountSolid">
      <SVG />
    </Icon>
  );
}
