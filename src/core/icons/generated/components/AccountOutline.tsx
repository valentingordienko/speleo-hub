import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AccountOutline.svg';

export function AccountOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="AccountOutline">
      <SVG />
    </Icon>
  );
}
