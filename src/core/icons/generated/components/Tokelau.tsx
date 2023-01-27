import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Tokelau.svg';

export function Tokelau(props: TBaseProps) {
  return (
    <Icon {...props} name="Tokelau">
      <SVG />
    </Icon>
  );
}
