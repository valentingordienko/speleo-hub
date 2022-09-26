import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HomeOutline.svg';

export function HomeOutline(props: TProps) {
  return (
    <Icon {...props} name="HomeOutline">
      <SVG />
    </Icon>
  );
}
