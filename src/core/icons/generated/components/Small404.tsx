import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Small404.svg';

export function Small404(props: TProps) {
  return (
    <Icon {...props} name="Small404">
      <SVG />
    </Icon>
  );
}
