import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PalladiumOutline.svg';

export function PalladiumOutline(props: TProps) {
  return (
    <Icon {...props} name="PalladiumOutline">
      <SVG />
    </Icon>
  );
}
