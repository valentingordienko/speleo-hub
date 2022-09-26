import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ZoomInSolid.svg';

export function ZoomInSolid(props: TProps) {
  return (
    <Icon {...props} name="ZoomInSolid">
      <SVG />
    </Icon>
  );
}
