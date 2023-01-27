import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Armenia.svg';

export function Armenia(props: TBaseProps) {
  return (
    <Icon {...props} name="Armenia">
      <SVG />
    </Icon>
  );
}
