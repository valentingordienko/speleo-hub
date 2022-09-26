import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ZoomInOutline.svg';

export function ZoomInOutline(props: TProps) {
  return (
    <Icon {...props} name="ZoomInOutline">
      <SVG />
    </Icon>
  );
}
