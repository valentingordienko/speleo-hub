import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SendSignOutline.svg';

export function SendSignOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="SendSignOutline">
      <SVG />
    </Icon>
  );
}
