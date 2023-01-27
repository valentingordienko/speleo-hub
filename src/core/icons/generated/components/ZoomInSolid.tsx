import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ZoomInSolid.svg';

export function ZoomInSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ZoomInSolid">
      <SVG />
    </Icon>
  );
}
