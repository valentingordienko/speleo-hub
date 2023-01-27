import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CaboVerde.svg';

export function CaboVerde(props: TBaseProps) {
  return (
    <Icon {...props} name="CaboVerde">
      <SVG />
    </Icon>
  );
}
