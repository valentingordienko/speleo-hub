import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Spain.svg';

export function Spain(props: TBaseProps) {
  return (
    <Icon {...props} name="Spain">
      <SVG />
    </Icon>
  );
}
