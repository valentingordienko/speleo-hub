import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowShortRightSolid.svg';

export function ArrowShortRightSolid(props: TProps) {
  return (
    <Icon {...props} name="ArrowShortRightSolid">
      <SVG />
    </Icon>
  );
}
