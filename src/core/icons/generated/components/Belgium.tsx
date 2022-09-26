import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Belgium.svg';

export function Belgium(props: TProps) {
  return (
    <Icon {...props} name="Belgium">
      <SVG />
    </Icon>
  );
}
