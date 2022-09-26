import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FullscreenCloseOutline.svg';

export function FullscreenCloseOutline(props: TProps) {
  return (
    <Icon {...props} name="FullscreenCloseOutline">
      <SVG />
    </Icon>
  );
}
