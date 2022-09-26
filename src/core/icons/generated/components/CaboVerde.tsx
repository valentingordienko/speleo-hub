import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CaboVerde.svg';

export function CaboVerde(props: TProps) {
  return (
    <Icon {...props} name="CaboVerde">
      <SVG />
    </Icon>
  );
}
