import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FormatPaintOutline.svg';

export function FormatPaintOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="FormatPaintOutline">
      <SVG />
    </Icon>
  );
}
