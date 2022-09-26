import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MagnetOutline.svg';

export function MagnetOutline(props: TProps) {
  return (
    <Icon {...props} name="MagnetOutline">
      <SVG />
    </Icon>
  );
}
