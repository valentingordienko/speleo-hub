import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CubeSolid.svg';

export function CubeSolid(props: TProps) {
  return (
    <Icon {...props} name="CubeSolid">
      <SVG />
    </Icon>
  );
}
