import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/KoreaSouth.svg';

export function KoreaSouth(props: TBaseProps) {
  return (
    <Icon {...props} name="KoreaSouth">
      <SVG />
    </Icon>
  );
}
