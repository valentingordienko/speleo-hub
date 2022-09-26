import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowShortDownSolid.svg';

export function ArrowShortDownSolid(props: TProps) {
  return (
    <Icon {...props} name="ArrowShortDownSolid">
      <SVG />
    </Icon>
  );
}
