import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowShortDownSolid.svg';

export function ArrowShortDownSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowShortDownSolid">
      <SVG />
    </Icon>
  );
}
