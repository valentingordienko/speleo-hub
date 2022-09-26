import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/COC.svg';

export function COC(props: TProps) {
  return (
    <Icon {...props} name="COC">
      <SVG />
    </Icon>
  );
}
