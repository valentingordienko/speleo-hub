import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PinOutline.svg';

export function PinOutline(props: TProps) {
  return (
    <Icon {...props} name="PinOutline">
      <SVG />
    </Icon>
  );
}
