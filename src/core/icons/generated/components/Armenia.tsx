import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Armenia.svg';

export function Armenia(props: TProps) {
  return (
    <Icon {...props} name="Armenia">
      <SVG />
    </Icon>
  );
}
