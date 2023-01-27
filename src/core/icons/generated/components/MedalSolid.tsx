import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MedalSolid.svg';

export function MedalSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="MedalSolid">
      <SVG />
    </Icon>
  );
}
