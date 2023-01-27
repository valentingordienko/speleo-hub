import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowsSmallLeftSolid.svg';

export function ArrowsSmallLeftSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowsSmallLeftSolid">
      <SVG />
    </Icon>
  );
}
