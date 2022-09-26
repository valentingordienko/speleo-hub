import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Latvia.svg';

export function Latvia(props: TProps) {
  return (
    <Icon {...props} name="Latvia">
      <SVG />
    </Icon>
  );
}
