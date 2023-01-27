import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Bhutan.svg';

export function Bhutan(props: TBaseProps) {
  return (
    <Icon {...props} name="Bhutan">
      <SVG />
    </Icon>
  );
}
