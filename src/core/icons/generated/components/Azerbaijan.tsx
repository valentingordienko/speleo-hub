import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Azerbaijan.svg';

export function Azerbaijan(props: TBaseProps) {
  return (
    <Icon {...props} name="Azerbaijan">
      <SVG />
    </Icon>
  );
}
