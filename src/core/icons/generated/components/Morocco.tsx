import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Morocco.svg';

export function Morocco(props: TBaseProps) {
  return (
    <Icon {...props} name="Morocco">
      <SVG />
    </Icon>
  );
}
