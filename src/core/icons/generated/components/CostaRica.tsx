import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CostaRica.svg';

export function CostaRica(props: TBaseProps) {
  return (
    <Icon {...props} name="CostaRica">
      <SVG />
    </Icon>
  );
}
