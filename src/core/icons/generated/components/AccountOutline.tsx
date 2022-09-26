import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AccountOutline.svg';

export function AccountOutline(props: TProps) {
  return (
    <Icon {...props} name="AccountOutline">
      <SVG />
    </Icon>
  );
}
