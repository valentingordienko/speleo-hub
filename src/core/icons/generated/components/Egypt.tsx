import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Egypt.svg';

export function Egypt(props: TProps) {
  return (
    <Icon {...props} name="Egypt">
      <SVG />
    </Icon>
  );
}
