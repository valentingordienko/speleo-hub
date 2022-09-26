import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PasswordSolid.svg';

export function PasswordSolid(props: TProps) {
  return (
    <Icon {...props} name="PasswordSolid">
      <SVG />
    </Icon>
  );
}
