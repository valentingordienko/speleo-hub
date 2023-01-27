import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SlideLeft.svg';

export function SlideLeft(props: TBaseProps) {
  return (
    <Icon {...props} name="SlideLeft">
      <SVG />
    </Icon>
  );
}
