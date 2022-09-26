import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ZoomOutOutline.svg';

export function ZoomOutOutline(props: TProps) {
  return (
    <Icon {...props} name="ZoomOutOutline">
      <SVG />
    </Icon>
  );
}
