import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SignInOutline.svg';

export function SignInOutline(props: TProps) {
  return (
    <Icon {...props} name="SignInOutline">
      <SVG />
    </Icon>
  );
}
