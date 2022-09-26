import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MedalSolid.svg';

export function MedalSolid(props: TProps) {
  return (
    <Icon {...props} name="MedalSolid">
      <SVG />
    </Icon>
  );
}
