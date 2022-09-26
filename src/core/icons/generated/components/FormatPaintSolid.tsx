import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FormatPaintSolid.svg';

export function FormatPaintSolid(props: TProps) {
  return (
    <Icon {...props} name="FormatPaintSolid">
      <SVG />
    </Icon>
  );
}
