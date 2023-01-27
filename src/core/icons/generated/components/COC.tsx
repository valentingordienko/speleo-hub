import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/COC.svg';

export function COC(props: TBaseProps) {
  return (
    <Icon {...props} name="COC">
      <SVG />
    </Icon>
  );
}
