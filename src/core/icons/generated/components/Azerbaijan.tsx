import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Azerbaijan.svg';

export function Azerbaijan(props: TProps) {
  return (
    <Icon {...props} name="Azerbaijan">
      <SVG />
    </Icon>
  );
}
