import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Iceland.svg';

export function Iceland(props: TProps) {
  return (
    <Icon {...props} name="Iceland">
      <SVG />
    </Icon>
  );
}
