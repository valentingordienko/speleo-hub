import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/IndeterminateOutline.svg';

export function IndeterminateOutline(props: TProps) {
  return (
    <Icon {...props} name="IndeterminateOutline">
      <SVG />
    </Icon>
  );
}
