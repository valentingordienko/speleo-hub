import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Nigeria.svg';

export function Nigeria(props: TProps) {
  return (
    <Icon {...props} name="Nigeria">
      <SVG />
    </Icon>
  );
}
