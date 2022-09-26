import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowsSmallLeftSolid.svg';

export function ArrowsSmallLeftSolid(props: TProps) {
  return (
    <Icon {...props} name="ArrowsSmallLeftSolid">
      <SVG />
    </Icon>
  );
}
