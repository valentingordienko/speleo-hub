import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/KoreaNorth.svg';

export function KoreaNorth(props: TBaseProps) {
  return (
    <Icon {...props} name="KoreaNorth">
      <SVG />
    </Icon>
  );
}
