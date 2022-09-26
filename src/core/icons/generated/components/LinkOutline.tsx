import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LinkOutline.svg';

export function LinkOutline(props: TProps) {
  return (
    <Icon {...props} name="LinkOutline">
      <SVG />
    </Icon>
  );
}
