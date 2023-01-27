import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Netherlands.svg';

export function Netherlands(props: TBaseProps) {
  return (
    <Icon {...props} name="Netherlands">
      <SVG />
    </Icon>
  );
}
