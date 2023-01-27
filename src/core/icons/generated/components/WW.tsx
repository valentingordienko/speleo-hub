import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/WW.svg';

export function WW(props: TBaseProps) {
  return (
    <Icon {...props} name="WW">
      <SVG />
    </Icon>
  );
}
