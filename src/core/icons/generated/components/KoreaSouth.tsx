import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/KoreaSouth.svg';

export function KoreaSouth(props: TProps) {
  return (
    <Icon {...props} name="KoreaSouth">
      <SVG />
    </Icon>
  );
}
