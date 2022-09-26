import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Netherlands.svg';

export function Netherlands(props: TProps) {
  return (
    <Icon {...props} name="Netherlands">
      <SVG />
    </Icon>
  );
}
