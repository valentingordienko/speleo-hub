import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FullscreenOpenSolid.svg';

export function FullscreenOpenSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="FullscreenOpenSolid">
      <SVG />
    </Icon>
  );
}
