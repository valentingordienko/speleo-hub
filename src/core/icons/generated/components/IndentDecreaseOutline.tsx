import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/IndentDecreaseOutline.svg';

export function IndentDecreaseOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="IndentDecreaseOutline">
      <SVG />
    </Icon>
  );
}
