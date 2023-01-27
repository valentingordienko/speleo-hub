import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Romania.svg';

export function Romania(props: TBaseProps) {
  return (
    <Icon {...props} name="Romania">
      <SVG />
    </Icon>
  );
}
