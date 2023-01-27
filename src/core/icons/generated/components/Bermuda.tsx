import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Bermuda.svg';

export function Bermuda(props: TBaseProps) {
  return (
    <Icon {...props} name="Bermuda">
      <SVG />
    </Icon>
  );
}
