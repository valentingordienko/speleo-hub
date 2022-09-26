import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/WW.svg';

export function WW(props: TProps) {
  return (
    <Icon {...props} name="WW">
      <SVG />
    </Icon>
  );
}
