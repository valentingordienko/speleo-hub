import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SlideRight.svg';

export function SlideRight(props: TBaseProps) {
  return (
    <Icon {...props} name="SlideRight">
      <SVG />
    </Icon>
  );
}
