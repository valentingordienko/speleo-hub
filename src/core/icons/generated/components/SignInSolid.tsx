import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SignInSolid.svg';

export function SignInSolid(props: TProps) {
  return (
    <Icon {...props} name="SignInSolid">
      <SVG />
    </Icon>
  );
}
