import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowShortLeftSolid.svg';

export function ArrowShortLeftSolid(props: TProps) {
  return (
    <Icon {...props} name="ArrowShortLeftSolid">
      <SVG />
    </Icon>
  );
}
