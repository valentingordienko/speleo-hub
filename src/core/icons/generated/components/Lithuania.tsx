import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Lithuania.svg';

export function Lithuania(props: TBaseProps) {
  return (
    <Icon {...props} name="Lithuania">
      <SVG />
    </Icon>
  );
}
