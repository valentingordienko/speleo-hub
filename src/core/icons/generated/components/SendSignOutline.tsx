import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SendSignOutline.svg';

export function SendSignOutline(props: TProps) {
  return (
    <Icon {...props} name="SendSignOutline">
      <SVG />
    </Icon>
  );
}
