import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Hungary.svg';

export function Hungary(props: TBaseProps) {
  return (
    <Icon {...props} name="Hungary">
      <SVG />
    </Icon>
  );
}
