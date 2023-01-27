import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LayoutOutline.svg';

export function LayoutOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="LayoutOutline">
      <SVG />
    </Icon>
  );
}
