import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ZoomOutOutline.svg';

export function ZoomOutOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ZoomOutOutline">
      <SVG />
    </Icon>
  );
}
