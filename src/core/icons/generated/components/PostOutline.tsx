import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PostOutline.svg';

export function PostOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PostOutline">
      <SVG />
    </Icon>
  );
}
