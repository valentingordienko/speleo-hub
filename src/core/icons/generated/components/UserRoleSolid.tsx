import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UserRoleSolid.svg';

export function UserRoleSolid(props: TProps) {
  return (
    <Icon {...props} name="UserRoleSolid">
      <SVG />
    </Icon>
  );
}
