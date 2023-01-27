import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowsSmallUpSolid.svg';

export function ArrowsSmallUpSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowsSmallUpSolid">
      <SVG />
    </Icon>
  );
}
