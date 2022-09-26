import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UserRoleOutline.svg';

export function UserRoleOutline(props: TProps) {
  return (
    <Icon {...props} name="UserRoleOutline">
      <SVG />
    </Icon>
  );
}
