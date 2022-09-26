import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SlideLeft.svg';

export function SlideLeft(props: TProps) {
  return (
    <Icon {...props} name="SlideLeft">
      <SVG />
    </Icon>
  );
}
