import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowSmallDownSolid.svg';

export function ArrowSmallDownSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowSmallDownSolid">
      <SVG />
    </Icon>
  );
}
