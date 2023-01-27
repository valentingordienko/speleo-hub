import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MinusInCircleOutline.svg';

export function MinusInCircleOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="MinusInCircleOutline">
      <SVG />
    </Icon>
  );
}
