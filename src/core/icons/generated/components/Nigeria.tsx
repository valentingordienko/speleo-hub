import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Nigeria.svg';

export function Nigeria(props: TBaseProps) {
  return (
    <Icon {...props} name="Nigeria">
      <SVG />
    </Icon>
  );
}
