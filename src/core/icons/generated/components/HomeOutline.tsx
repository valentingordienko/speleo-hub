import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HomeOutline.svg';

export function HomeOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="HomeOutline">
      <SVG />
    </Icon>
  );
}
