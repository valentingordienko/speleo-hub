import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FormatPaintOutline.svg';

export function FormatPaintOutline(props: TProps) {
  return (
    <Icon {...props} name="FormatPaintOutline">
      <SVG />
    </Icon>
  );
}
