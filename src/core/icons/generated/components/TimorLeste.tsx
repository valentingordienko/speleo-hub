import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TimorLeste.svg';

export function TimorLeste(props: TBaseProps) {
  return (
    <Icon {...props} name="TimorLeste">
      <SVG />
    </Icon>
  );
}
