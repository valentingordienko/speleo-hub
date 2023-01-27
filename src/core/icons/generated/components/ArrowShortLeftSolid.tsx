import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowShortLeftSolid.svg';

export function ArrowShortLeftSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowShortLeftSolid">
      <SVG />
    </Icon>
  );
}
