import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LayoutSolid.svg';

export function LayoutSolid(props: TProps) {
  return (
    <Icon {...props} name="LayoutSolid">
      <SVG />
    </Icon>
  );
}
