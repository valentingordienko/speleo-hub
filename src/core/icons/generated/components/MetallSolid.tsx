import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MetallSolid.svg';

export function MetallSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="MetallSolid">
      <SVG />
    </Icon>
  );
}
