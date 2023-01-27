import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Small404.svg';

export function Small404(props: TBaseProps) {
  return (
    <Icon {...props} name="Small404">
      <SVG />
    </Icon>
  );
}
