import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CEU.svg';

export function CEU(props: TBaseProps) {
  return (
    <Icon {...props} name="CEU">
      <SVG />
    </Icon>
  );
}
