import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ColorSolid.svg';

export function ColorSolid(props: TProps) {
  return (
    <Icon {...props} name="ColorSolid">
      <SVG />
    </Icon>
  );
}
