import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SignOutline.svg';

export function SignOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="SignOutline">
      <SVG />
    </Icon>
  );
}
