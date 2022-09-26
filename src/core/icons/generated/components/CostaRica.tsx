import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CostaRica.svg';

export function CostaRica(props: TProps) {
  return (
    <Icon {...props} name="CostaRica">
      <SVG />
    </Icon>
  );
}
