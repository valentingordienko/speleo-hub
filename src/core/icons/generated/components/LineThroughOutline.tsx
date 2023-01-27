import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LineThroughOutline.svg';

export function LineThroughOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="LineThroughOutline">
      <SVG />
    </Icon>
  );
}
