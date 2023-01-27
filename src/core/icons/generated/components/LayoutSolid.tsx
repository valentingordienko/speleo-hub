import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LayoutSolid.svg';

export function LayoutSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="LayoutSolid">
      <SVG />
    </Icon>
  );
}
