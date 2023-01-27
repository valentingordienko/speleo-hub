import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Haiti.svg';

export function Haiti(props: TBaseProps) {
  return (
    <Icon {...props} name="Haiti">
      <SVG />
    </Icon>
  );
}
