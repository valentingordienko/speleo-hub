import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FullscreenCloseOutline.svg';

export function FullscreenCloseOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="FullscreenCloseOutline">
      <SVG />
    </Icon>
  );
}
