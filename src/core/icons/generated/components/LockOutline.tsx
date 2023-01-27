import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LockOutline.svg';

export function LockOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="LockOutline">
      <SVG />
    </Icon>
  );
}
