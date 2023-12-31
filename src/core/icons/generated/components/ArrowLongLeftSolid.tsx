import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowLongLeftSolid.svg';

export function ArrowLongLeftSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowLongLeftSolid">
      <SVG />
    </Icon>
  );
}
