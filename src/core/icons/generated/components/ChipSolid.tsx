import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChipSolid.svg';

export function ChipSolid(props: TProps) {
  return (
    <Icon {...props} name="ChipSolid">
      <SVG />
    </Icon>
  );
}
