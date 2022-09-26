import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Turkmenistan.svg';

export function Turkmenistan(props: TProps) {
  return (
    <Icon {...props} name="Turkmenistan">
      <SVG />
    </Icon>
  );
}
