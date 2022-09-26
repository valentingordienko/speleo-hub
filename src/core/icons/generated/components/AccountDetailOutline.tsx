import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AccountDetailOutline.svg';

export function AccountDetailOutline(props: TProps) {
  return (
    <Icon {...props} name="AccountDetailOutline">
      <SVG />
    </Icon>
  );
}
