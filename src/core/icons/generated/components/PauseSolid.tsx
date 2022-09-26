import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PauseSolid.svg';

export function PauseSolid(props: TProps) {
  return (
    <Icon {...props} name="PauseSolid">
      <SVG />
    </Icon>
  );
}
