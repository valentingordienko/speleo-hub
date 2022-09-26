import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ThirdPersonSolid.svg';

export function ThirdPersonSolid(props: TProps) {
  return (
    <Icon {...props} name="ThirdPersonSolid">
      <SVG />
    </Icon>
  );
}
