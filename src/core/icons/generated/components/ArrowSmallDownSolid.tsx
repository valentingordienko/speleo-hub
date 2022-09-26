import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowSmallDownSolid.svg';

export function ArrowSmallDownSolid(props: TProps) {
  return (
    <Icon {...props} name="ArrowSmallDownSolid">
      <SVG />
    </Icon>
  );
}
