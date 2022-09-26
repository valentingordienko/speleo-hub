import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Spain.svg';

export function Spain(props: TProps) {
  return (
    <Icon {...props} name="Spain">
      <SVG />
    </Icon>
  );
}
