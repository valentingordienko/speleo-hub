import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PasswordSolid.svg';

export function PasswordSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PasswordSolid">
      <SVG />
    </Icon>
  );
}
