import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Bhutan.svg';

export function Bhutan(props: TProps) {
  return (
    <Icon {...props} name="Bhutan">
      <SVG />
    </Icon>
  );
}
