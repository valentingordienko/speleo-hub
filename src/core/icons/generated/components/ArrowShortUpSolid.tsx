import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowShortUpSolid.svg';

export function ArrowShortUpSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowShortUpSolid">
      <SVG />
    </Icon>
  );
}
