import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Hungary.svg';

export function Hungary(props: TProps) {
  return (
    <Icon {...props} name="Hungary">
      <SVG />
    </Icon>
  );
}
