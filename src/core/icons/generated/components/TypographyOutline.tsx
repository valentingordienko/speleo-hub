import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TypographyOutline.svg';

export function TypographyOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="TypographyOutline">
      <SVG />
    </Icon>
  );
}
