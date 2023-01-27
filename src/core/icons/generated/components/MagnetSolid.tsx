import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MagnetSolid.svg';

export function MagnetSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="MagnetSolid">
      <SVG />
    </Icon>
  );
}
