import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/KoreaNorth.svg';

export function KoreaNorth(props: TProps) {
  return (
    <Icon {...props} name="KoreaNorth">
      <SVG />
    </Icon>
  );
}
