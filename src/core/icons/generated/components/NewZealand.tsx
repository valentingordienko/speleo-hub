import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/NewZealand.svg';

export function NewZealand(props: TProps) {
  return (
    <Icon {...props} name="NewZealand">
      <SVG />
    </Icon>
  );
}
