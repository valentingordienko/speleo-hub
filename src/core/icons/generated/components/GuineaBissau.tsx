import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GuineaBissau.svg';

export function GuineaBissau(props: TBaseProps) {
  return (
    <Icon {...props} name="GuineaBissau">
      <SVG />
    </Icon>
  );
}
