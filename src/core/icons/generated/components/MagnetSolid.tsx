import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MagnetSolid.svg';

export function MagnetSolid(props: TProps) {
  return (
    <Icon {...props} name="MagnetSolid">
      <SVG />
    </Icon>
  );
}
