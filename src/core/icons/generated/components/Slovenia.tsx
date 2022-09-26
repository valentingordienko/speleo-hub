import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Slovenia.svg';

export function Slovenia(props: TProps) {
  return (
    <Icon {...props} name="Slovenia">
      <SVG />
    </Icon>
  );
}
