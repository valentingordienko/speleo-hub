import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Belgium.svg';

export function Belgium(props: TBaseProps) {
  return (
    <Icon {...props} name="Belgium">
      <SVG />
    </Icon>
  );
}
