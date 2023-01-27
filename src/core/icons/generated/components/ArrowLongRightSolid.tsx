import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowLongRightSolid.svg';

export function ArrowLongRightSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowLongRightSolid">
      <SVG />
    </Icon>
  );
}
