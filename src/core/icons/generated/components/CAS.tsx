import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CAS.svg';

export function CAS(props: TProps) {
  return (
    <Icon {...props} name="CAS">
      <SVG />
    </Icon>
  );
}
