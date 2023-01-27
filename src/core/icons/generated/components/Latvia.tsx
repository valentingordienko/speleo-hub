import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Latvia.svg';

export function Latvia(props: TBaseProps) {
  return (
    <Icon {...props} name="Latvia">
      <SVG />
    </Icon>
  );
}
