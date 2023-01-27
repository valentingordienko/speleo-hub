import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Austria.svg';

export function Austria(props: TBaseProps) {
  return (
    <Icon {...props} name="Austria">
      <SVG />
    </Icon>
  );
}
