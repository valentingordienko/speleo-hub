import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AccountDetailOutline.svg';

export function AccountDetailOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="AccountDetailOutline">
      <SVG />
    </Icon>
  );
}
