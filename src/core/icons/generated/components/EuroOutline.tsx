import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EuroOutline.svg';

export function EuroOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="EuroOutline">
      <SVG />
    </Icon>
  );
}
