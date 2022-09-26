import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Austria.svg';

export function Austria(props: TProps) {
  return (
    <Icon {...props} name="Austria">
      <SVG />
    </Icon>
  );
}
