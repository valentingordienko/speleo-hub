import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ColorOutline.svg';

export function ColorOutline(props: TProps) {
  return (
    <Icon {...props} name="ColorOutline">
      <SVG />
    </Icon>
  );
}
