import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Myanmar.svg';

export function Myanmar(props: TProps) {
  return (
    <Icon {...props} name="Myanmar">
      <SVG />
    </Icon>
  );
}
