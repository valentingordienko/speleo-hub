import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GoldSolid.svg';

export function GoldSolid(props: TProps) {
  return (
    <Icon {...props} name="GoldSolid">
      <SVG />
    </Icon>
  );
}