import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PostOutline.svg';

export function PostOutline(props: TProps) {
  return (
    <Icon {...props} name="PostOutline">
      <SVG />
    </Icon>
  );
}
