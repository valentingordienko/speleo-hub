import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CNA.svg';

export function CNA(props: TBaseProps) {
  return (
    <Icon {...props} name="CNA">
      <SVG />
    </Icon>
  );
}
