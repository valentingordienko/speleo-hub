import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ColorOutline.svg';

export function ColorOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ColorOutline">
      <SVG />
    </Icon>
  );
}
