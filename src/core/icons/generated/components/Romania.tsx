import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Romania.svg';

export function Romania(props: TProps) {
  return (
    <Icon {...props} name="Romania">
      <SVG />
    </Icon>
  );
}
