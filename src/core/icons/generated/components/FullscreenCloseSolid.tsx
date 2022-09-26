import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FullscreenCloseSolid.svg';

export function FullscreenCloseSolid(props: TProps) {
  return (
    <Icon {...props} name="FullscreenCloseSolid">
      <SVG />
    </Icon>
  );
}
