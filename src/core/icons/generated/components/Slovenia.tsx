import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Slovenia.svg';

export function Slovenia(props: TBaseProps) {
  return (
    <Icon {...props} name="Slovenia">
      <SVG />
    </Icon>
  );
}
