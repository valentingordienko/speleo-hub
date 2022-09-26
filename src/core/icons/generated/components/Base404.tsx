import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Base404.svg';

export function Base404(props: TProps) {
  return (
    <Icon {...props} name="Base404">
      <SVG />
    </Icon>
  );
}
