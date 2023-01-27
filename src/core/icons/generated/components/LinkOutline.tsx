import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LinkOutline.svg';

export function LinkOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="LinkOutline">
      <SVG />
    </Icon>
  );
}
