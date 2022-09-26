import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LockOutline.svg';

export function LockOutline(props: TProps) {
  return (
    <Icon {...props} name="LockOutline">
      <SVG />
    </Icon>
  );
}
