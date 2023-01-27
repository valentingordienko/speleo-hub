import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ThirdPersonSolid.svg';

export function ThirdPersonSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ThirdPersonSolid">
      <SVG />
    </Icon>
  );
}
