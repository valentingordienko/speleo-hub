import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SignOutline.svg';

export function SignOutline(props: TProps) {
  return (
    <Icon {...props} name="SignOutline">
      <SVG />
    </Icon>
  );
}
