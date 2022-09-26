import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Bermuda.svg';

export function Bermuda(props: TProps) {
  return (
    <Icon {...props} name="Bermuda">
      <SVG />
    </Icon>
  );
}
