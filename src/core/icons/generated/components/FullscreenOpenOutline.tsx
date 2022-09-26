import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FullscreenOpenOutline.svg';

export function FullscreenOpenOutline(props: TProps) {
  return (
    <Icon {...props} name="FullscreenOpenOutline">
      <SVG />
    </Icon>
  );
}
