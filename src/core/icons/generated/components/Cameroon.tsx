import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Cameroon.svg';

export function Cameroon(props: TBaseProps) {
  return (
    <Icon {...props} name="Cameroon">
      <SVG />
    </Icon>
  );
}
