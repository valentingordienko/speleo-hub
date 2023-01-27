import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FullscreenOpenOutline.svg';

export function FullscreenOpenOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="FullscreenOpenOutline">
      <SVG />
    </Icon>
  );
}
