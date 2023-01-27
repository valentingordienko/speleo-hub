import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SignInSolid.svg';

export function SignInSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="SignInSolid">
      <SVG />
    </Icon>
  );
}
