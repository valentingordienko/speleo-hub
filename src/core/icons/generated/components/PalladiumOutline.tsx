import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PalladiumOutline.svg';

export function PalladiumOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PalladiumOutline">
      <SVG />
    </Icon>
  );
}
