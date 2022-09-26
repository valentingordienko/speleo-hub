import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TypographyOutline.svg';

export function TypographyOutline(props: TProps) {
  return (
    <Icon {...props} name="TypographyOutline">
      <SVG />
    </Icon>
  );
}
