import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/IndeterminateOutline.svg';

export function IndeterminateOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="IndeterminateOutline">
      <SVG />
    </Icon>
  );
}
