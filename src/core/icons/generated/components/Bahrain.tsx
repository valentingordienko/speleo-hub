import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Bahrain.svg';

export function Bahrain(props: TBaseProps) {
  return (
    <Icon {...props} name="Bahrain">
      <SVG />
    </Icon>
  );
}
