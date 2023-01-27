import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChipSolid.svg';

export function ChipSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ChipSolid">
      <SVG />
    </Icon>
  );
}
