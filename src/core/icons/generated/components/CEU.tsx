import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CEU.svg';

export function CEU(props: TProps) {
  return (
    <Icon {...props} name="CEU">
      <SVG />
    </Icon>
  );
}
