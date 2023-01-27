import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SignInOutline.svg';

export function SignInOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="SignInOutline">
      <SVG />
    </Icon>
  );
}
