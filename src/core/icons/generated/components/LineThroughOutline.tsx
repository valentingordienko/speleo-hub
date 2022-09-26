import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LineThroughOutline.svg';

export function LineThroughOutline(props: TProps) {
  return (
    <Icon {...props} name="LineThroughOutline">
      <SVG />
    </Icon>
  );
}
