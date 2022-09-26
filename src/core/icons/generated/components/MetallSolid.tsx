import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MetallSolid.svg';

export function MetallSolid(props: TProps) {
  return (
    <Icon {...props} name="MetallSolid">
      <SVG />
    </Icon>
  );
}
