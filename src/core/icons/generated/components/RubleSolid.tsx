import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RubleSolid.svg';

export function RubleSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="RubleSolid">
      <SVG />
    </Icon>
  );
}
