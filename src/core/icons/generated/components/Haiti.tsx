import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Haiti.svg';

export function Haiti(props: TProps) {
  return (
    <Icon {...props} name="Haiti">
      <SVG />
    </Icon>
  );
}
