import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowsSmallUpSolid.svg';

export function ArrowsSmallUpSolid(props: TProps) {
  return (
    <Icon {...props} name="ArrowsSmallUpSolid">
      <SVG />
    </Icon>
  );
}
