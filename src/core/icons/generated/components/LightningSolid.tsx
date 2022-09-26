import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LightningSolid.svg';

export function LightningSolid(props: TProps) {
  return (
    <Icon {...props} name="LightningSolid">
      <SVG />
    </Icon>
  );
}
