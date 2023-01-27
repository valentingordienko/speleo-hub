import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CubeSolid.svg';

export function CubeSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CubeSolid">
      <SVG />
    </Icon>
  );
}
