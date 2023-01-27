import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PauseSolid.svg';

export function PauseSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PauseSolid">
      <SVG />
    </Icon>
  );
}
