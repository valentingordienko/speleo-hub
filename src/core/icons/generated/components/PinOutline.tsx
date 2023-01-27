import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PinOutline.svg';

export function PinOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PinOutline">
      <SVG />
    </Icon>
  );
}
