import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Poland.svg';

export function Poland(props: TBaseProps) {
  return (
    <Icon {...props} name="Poland">
      <SVG />
    </Icon>
  );
}
