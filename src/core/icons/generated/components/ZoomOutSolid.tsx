import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ZoomOutSolid.svg';

export function ZoomOutSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ZoomOutSolid">
      <SVG />
    </Icon>
  );
}
