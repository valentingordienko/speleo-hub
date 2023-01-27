import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Turkmenistan.svg';

export function Turkmenistan(props: TBaseProps) {
  return (
    <Icon {...props} name="Turkmenistan">
      <SVG />
    </Icon>
  );
}
