import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ZoomInOutline.svg';

export function ZoomInOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ZoomInOutline">
      <SVG />
    </Icon>
  );
}
