import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/NewZealand.svg';

export function NewZealand(props: TBaseProps) {
  return (
    <Icon {...props} name="NewZealand">
      <SVG />
    </Icon>
  );
}
