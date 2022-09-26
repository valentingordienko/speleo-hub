import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UserDeleteSolid.svg';

export function UserDeleteSolid(props: TProps) {
  return (
    <Icon {...props} name="UserDeleteSolid">
      <SVG />
    </Icon>
  );
}
