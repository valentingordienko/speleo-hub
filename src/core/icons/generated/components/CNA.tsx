import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CNA.svg';

export function CNA(props: TProps) {
  return (
    <Icon {...props} name="CNA">
      <SVG />
    </Icon>
  );
}
