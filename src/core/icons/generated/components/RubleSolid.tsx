import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RubleSolid.svg';

export function RubleSolid(props: TProps) {
  return (
    <Icon {...props} name="RubleSolid">
      <SVG />
    </Icon>
  );
}
