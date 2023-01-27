import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Myanmar.svg';

export function Myanmar(props: TBaseProps) {
  return (
    <Icon {...props} name="Myanmar">
      <SVG />
    </Icon>
  );
}
