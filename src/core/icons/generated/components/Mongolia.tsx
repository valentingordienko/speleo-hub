import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Mongolia.svg';

export function Mongolia(props: TBaseProps) {
  return (
    <Icon {...props} name="Mongolia">
      <SVG />
    </Icon>
  );
}
