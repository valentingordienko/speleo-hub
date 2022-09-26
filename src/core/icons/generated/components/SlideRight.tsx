import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SlideRight.svg';

export function SlideRight(props: TProps) {
  return (
    <Icon {...props} name="SlideRight">
      <SVG />
    </Icon>
  );
}
