import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LayoutOutline.svg';

export function LayoutOutline(props: TProps) {
  return (
    <Icon {...props} name="LayoutOutline">
      <SVG />
    </Icon>
  );
}
