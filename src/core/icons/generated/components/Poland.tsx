import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Poland.svg';

export function Poland(props: TProps) {
  return (
    <Icon {...props} name="Poland">
      <SVG />
    </Icon>
  );
}
