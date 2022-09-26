import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowLongUpSolid.svg';

export function ArrowLongUpSolid(props: TProps) {
  return (
    <Icon {...props} name="ArrowLongUpSolid">
      <SVG />
    </Icon>
  );
}
