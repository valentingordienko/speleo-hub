import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowShortUpSolid.svg';

export function ArrowShortUpSolid(props: TProps) {
  return (
    <Icon {...props} name="ArrowShortUpSolid">
      <SVG />
    </Icon>
  );
}
