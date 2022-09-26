import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowsSmallRightSolid.svg';

export function ArrowsSmallRightSolid(props: TProps) {
  return (
    <Icon {...props} name="ArrowsSmallRightSolid">
      <SVG />
    </Icon>
  );
}
