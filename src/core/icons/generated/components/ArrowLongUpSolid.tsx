import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowLongUpSolid.svg';

export function ArrowLongUpSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowLongUpSolid">
      <SVG />
    </Icon>
  );
}
