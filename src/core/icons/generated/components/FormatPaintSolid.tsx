import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FormatPaintSolid.svg';

export function FormatPaintSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="FormatPaintSolid">
      <SVG />
    </Icon>
  );
}
