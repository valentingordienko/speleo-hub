import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CalculateSolid.svg';

export function CalculateSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CalculateSolid">
      <SVG />
    </Icon>
  );
}
