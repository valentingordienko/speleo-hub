import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ZoomOutSolid.svg';

export function ZoomOutSolid(props: TProps) {
  return (
    <Icon {...props} name="ZoomOutSolid">
      <SVG />
    </Icon>
  );
}
