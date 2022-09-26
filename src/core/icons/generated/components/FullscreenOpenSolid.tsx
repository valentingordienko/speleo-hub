import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FullscreenOpenSolid.svg';

export function FullscreenOpenSolid(props: TProps) {
  return (
    <Icon {...props} name="FullscreenOpenSolid">
      <SVG />
    </Icon>
  );
}
