import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UserDeleteSolid.svg';

export function UserDeleteSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="UserDeleteSolid">
      <SVG />
    </Icon>
  );
}
