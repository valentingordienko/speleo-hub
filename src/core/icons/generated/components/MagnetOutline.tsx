import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MagnetOutline.svg';

export function MagnetOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="MagnetOutline">
      <SVG />
    </Icon>
  );
}
