import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LightningSolid.svg';

export function LightningSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="LightningSolid">
      <SVG />
    </Icon>
  );
}
