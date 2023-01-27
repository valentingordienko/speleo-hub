import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowShortRightSolid.svg';

export function ArrowShortRightSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowShortRightSolid">
      <SVG />
    </Icon>
  );
}
