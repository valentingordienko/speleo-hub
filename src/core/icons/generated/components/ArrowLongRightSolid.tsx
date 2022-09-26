import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowLongRightSolid.svg';

export function ArrowLongRightSolid(props: TProps) {
  return (
    <Icon {...props} name="ArrowLongRightSolid">
      <SVG />
    </Icon>
  );
}
