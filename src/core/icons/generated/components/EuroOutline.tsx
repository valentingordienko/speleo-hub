import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EuroOutline.svg';

export function EuroOutline(props: TProps) {
  return (
    <Icon {...props} name="EuroOutline">
      <SVG />
    </Icon>
  );
}
