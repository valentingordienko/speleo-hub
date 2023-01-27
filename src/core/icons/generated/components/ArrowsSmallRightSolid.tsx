import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowsSmallRightSolid.svg';

export function ArrowsSmallRightSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowsSmallRightSolid">
      <SVG />
    </Icon>
  );
}
