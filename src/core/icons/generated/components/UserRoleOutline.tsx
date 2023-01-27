import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UserRoleOutline.svg';

export function UserRoleOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="UserRoleOutline">
      <SVG />
    </Icon>
  );
}
