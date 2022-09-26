import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MinusInCircleOutline.svg';

export function MinusInCircleOutline(props: TProps) {
  return (
    <Icon {...props} name="MinusInCircleOutline">
      <SVG />
    </Icon>
  );
}
