import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Iceland.svg';

export function Iceland(props: TBaseProps) {
  return (
    <Icon {...props} name="Iceland">
      <SVG />
    </Icon>
  );
}
