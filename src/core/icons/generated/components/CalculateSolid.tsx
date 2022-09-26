import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CalculateSolid.svg';

export function CalculateSolid(props: TProps) {
  return (
    <Icon {...props} name="CalculateSolid">
      <SVG />
    </Icon>
  );
}
