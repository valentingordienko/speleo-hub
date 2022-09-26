import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Bahrain.svg';

export function Bahrain(props: TProps) {
  return (
    <Icon {...props} name="Bahrain">
      <SVG />
    </Icon>
  );
}
