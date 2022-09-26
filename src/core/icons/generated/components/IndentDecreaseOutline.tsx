import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/IndentDecreaseOutline.svg';

export function IndentDecreaseOutline(props: TProps) {
  return (
    <Icon {...props} name="IndentDecreaseOutline">
      <SVG />
    </Icon>
  );
}
