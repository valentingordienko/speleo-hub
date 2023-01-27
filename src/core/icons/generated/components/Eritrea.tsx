import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Eritrea.svg';

export function Eritrea(props: TBaseProps) {
  return (
    <Icon {...props} name="Eritrea">
      <SVG />
    </Icon>
  );
}
