import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PalladiumSolid.svg';

export function PalladiumSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PalladiumSolid">
      <SVG />
    </Icon>
  );
}
