import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PalladiumSolid.svg';

export function PalladiumSolid(props: TProps) {
  return (
    <Icon {...props} name="PalladiumSolid">
      <SVG />
    </Icon>
  );
}
