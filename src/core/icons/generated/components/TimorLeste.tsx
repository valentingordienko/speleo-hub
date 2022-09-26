import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TimorLeste.svg';

export function TimorLeste(props: TProps) {
  return (
    <Icon {...props} name="TimorLeste">
      <SVG />
    </Icon>
  );
}
