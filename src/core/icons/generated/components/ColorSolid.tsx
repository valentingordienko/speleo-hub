import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ColorSolid.svg';

export function ColorSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ColorSolid">
      <SVG />
    </Icon>
  );
}
