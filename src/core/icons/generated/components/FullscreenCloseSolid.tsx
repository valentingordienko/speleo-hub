import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FullscreenCloseSolid.svg';

export function FullscreenCloseSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="FullscreenCloseSolid">
      <SVG />
    </Icon>
  );
}
