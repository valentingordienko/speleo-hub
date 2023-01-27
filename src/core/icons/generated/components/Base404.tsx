import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Base404.svg';

export function Base404(props: TBaseProps) {
  return (
    <Icon {...props} name="Base404">
      <SVG />
    </Icon>
  );
}
