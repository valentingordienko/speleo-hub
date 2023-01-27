import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CAS.svg';

export function CAS(props: TBaseProps) {
  return (
    <Icon {...props} name="CAS">
      <SVG />
    </Icon>
  );
}
