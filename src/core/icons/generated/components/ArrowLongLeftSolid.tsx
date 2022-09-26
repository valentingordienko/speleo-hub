import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowLongLeftSolid.svg';

export function ArrowLongLeftSolid(props: TProps) {
  return (
    <Icon {...props} name="ArrowLongLeftSolid">
      <SVG />
    </Icon>
  );
}
